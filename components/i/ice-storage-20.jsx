import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqfw9ounj.css';
import '../../css/d/dydpk_h_p.css';
import '../../css/y/yc2ch-bzb.css';
import '../../css/d/dhrpajl5x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gqfw9ounj"/><path class="dydpk_h_p"/><path class="yc2ch-bzb"/><path class="dhrpajl5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-storage-20"} {...others} />);
}

export default Component;
