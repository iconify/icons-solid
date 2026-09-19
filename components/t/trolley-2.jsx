import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u2_toi-5o.css';
import '../../css/z/z4h61sbrv.css';
import '../../css/c/cfqcp_8gy.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1 1)" class="n1lsf0bnc"><circle class="u2_toi-5o"/><ellipse class="z4h61sbrv"/><path class="cfqcp_8gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:trolley-2"} {...others} />);
}

export default Component;
