import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f_f3a9b3b.css';
import '../../css/w/w3d-tf10v.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1 1)" class="n1lsf0bnc"><path class="f_f3a9b3b"/><circle class="w3d-tf10v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:picture"} {...others} />);
}

export default Component;
