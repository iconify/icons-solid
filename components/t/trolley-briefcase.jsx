import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b0cnw74gn.css';
import '../../css/j/j0nrwubnn.css';
import '../../css/c/cah5o1biu.css';
import '../../css/r/renz17btl.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="b0cnw74gn"/><circle class="j0nrwubnn"/><path class="cah5o1biu"/><path class="renz17btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:trolley-briefcase"} {...others} />);
}

export default Component;
