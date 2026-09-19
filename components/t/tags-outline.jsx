import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4jz1gwne.css';
import '../../css/m/mszjz-b4f.css';
import '../../css/y/y66jmy99b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l4jz1gwne"/><path clip-rule="evenodd" class="mszjz-b4f"/><path class="y66jmy99b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tags-outline"} {...others} />);
}

export default Component;
