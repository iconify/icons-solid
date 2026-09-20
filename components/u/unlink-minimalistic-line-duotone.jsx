import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ro1sdrwkc.css';
import '../../css/b/bbo_g2b0u.css';
import '../../css/e/ell5nh48g.css';
import '../../css/u/u--jkffzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ro1sdrwkc"/><path class="bbo_g2b0u"/><path class="ell5nh48g"/><path class="u--jkffzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-minimalistic-line-duotone"} {...others} />);
}

export default Component;
