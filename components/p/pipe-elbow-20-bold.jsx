import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmbneo8nu.css';
import '../../css/x/x-j_oib3m.css';
import '../../css/e/ef10pob7a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fmbneo8nu"/><path class="x-j_oib3m"/><path class="ef10pob7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-elbow-20-bold"} {...others} />);
}

export default Component;
