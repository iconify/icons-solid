import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jwgpxoo3x.css';
import '../../css/t/tk71-d9_p.css';
import '../../css/d/dm3lzbbtn.css';
import '../../css/j/jvu_1rs4r.css';

const viewBox = {"width":16,"height":16};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jwgpxoo3x"/><path class="tk71-d9_p"/><path class="dm3lzbbtn"/><path class="jvu_1rs4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:google"} {...others} />);
}

export default Component;
