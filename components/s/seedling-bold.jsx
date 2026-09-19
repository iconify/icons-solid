import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6d9d-5wa.css';
import '../../css/i/iilf0foug.css';
import '../../css/u/u4158f_1b.css';
import '../../css/x/xsudcvata.css';
import '../../css/j/jt9jc9b4c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="j6d9d-5wa"/><path clip-rule="evenodd" class="iilf0foug"/><path class="u4158f_1b"/><path clip-rule="evenodd" class="xsudcvata"/><path class="jt9jc9b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:seedling-bold"} {...others} />);
}

export default Component;
