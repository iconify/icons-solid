import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jwslwwb9l.css';
import '../../css/i/i-prw--3g.css';
import '../../css/c/c1788rp0v.css';
import '../../css/t/t0r8m-b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jwslwwb9l"/><path class="i-prw--3g"/><path class="c1788rp0v"/><path class="t0r8m-b4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-broken"} {...others} />);
}

export default Component;
