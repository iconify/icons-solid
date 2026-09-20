import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/d4mf_6n7s.css';
import '../../css/z/zjkwwcx1u.css';
import '../../css/f/fwuo4_bgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="d4mf_6n7s"/><path class="zjkwwcx1u"/><path class="fwuo4_bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-stars-linear"} {...others} />);
}

export default Component;
