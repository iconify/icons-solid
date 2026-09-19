import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4190l-xv.css';
import '../../css/w/w6o5vcxcm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k4190l-xv"/><path class="w6o5vcxcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-3-duo"} {...others} />);
}

export default Component;
