import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fu0daqcgv.css';
import '../../css/t/tnj11zbtt.css';
import '../../css/i/i-jb43rcz.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><circle class="fu0daqcgv"/><path class="tnj11zbtt"/><path class="i-jb43rcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nimoxis"} {...others} />);
}

export default Component;
