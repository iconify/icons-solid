import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/f/f2gpx3bim.css';
import '../../css/v/v0bh_-0sc.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="f2gpx3bim"/><path class="v0bh_-0sc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:enter-alt"} {...others} />);
}

export default Component;
