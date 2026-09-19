import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1t18f8qj.css';
import '../../css/d/dorj-7bxn.css';
import '../../css/c/c_k1iu0hr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e1t18f8qj"/><path clip-rule="evenodd" class="dorj-7bxn"/><path class="c_k1iu0hr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:windsock-bold"} {...others} />);
}

export default Component;
