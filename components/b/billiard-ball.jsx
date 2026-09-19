import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m2pzl820n.css';
import '../../css/r/r5w4_ixac.css';
import '../../css/f/f_lm5wbro.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="m2pzl820n"/><path class="r5w4_ixac"/><path class="f_lm5wbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:billiard-ball"} {...others} />);
}

export default Component;
