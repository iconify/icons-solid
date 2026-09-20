import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lc5pw-bzm.css';
import '../../css/k/k4477sb2u.css';
import '../../css/b/bh86b7bjo.css';
import '../../css/z/zl5d7ib8n.css';
import '../../css/r/rgd3ntbaa.css';
import '../../css/j/jqmyq6bee.css';
import '../../css/f/fiwjexowx.css';
import '../../css/y/y7n22l44j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lc5pw-bzm"/><path class="k4477sb2u"/><path class="bh86b7bjo"/><path class="zl5d7ib8n"/><path class="rgd3ntbaa"/><path class="jqmyq6bee"/><path class="fiwjexowx"/><path class="y7n22l44j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-fracture-line-duotone"} {...others} />);
}

export default Component;
