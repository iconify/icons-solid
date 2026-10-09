import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz2ueib5k.css';
import '../../css/o/o0dsv_yqv.css';
import '../../css/a/anr76sdxi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gz2ueib5k"/><path class="o0dsv_yqv"/><path class="anr76sdxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washer-48"} {...others} />);
}

export default Component;
