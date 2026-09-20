import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6ojcpbik.css';
import '../../css/t/t6t3twame.css';
import '../../css/h/h2ibskvyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c6ojcpbik"/><path class="t6t3twame"/><path class="h2ibskvyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-broken"} {...others} />);
}

export default Component;
