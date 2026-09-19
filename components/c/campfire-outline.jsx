import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcazt4rfm.css';
import '../../css/b/bnjmyndfa.css';
import '../../css/d/dipsfvb4p.css';
import '../../css/d/d-h_ycbnd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bcazt4rfm"/><path class="bnjmyndfa"/><path clip-rule="evenodd" class="dipsfvb4p"/><path class="d-h_ycbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:campfire-outline"} {...others} />);
}

export default Component;
