import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ealwxr77b.css';
import '../../css/h/hjrj_fbxo.css';
import '../../css/q/qx29q2bfr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ealwxr77b"/><path class="hjrj_fbxo"/><path clip-rule="evenodd" class="qx29q2bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:scroll-old"} {...others} />);
}

export default Component;
