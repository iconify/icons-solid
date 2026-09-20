import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rct29b3qg.css';
import '../../css/e/ezkmwabnq.css';
import '../../css/j/janxgzbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rct29b3qg"/><path class="ezkmwabnq"/><path class="janxgzbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-broken"} {...others} />);
}

export default Component;
