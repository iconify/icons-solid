import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/f/ftb7s8b8n.css';
import '../../css/m/mn8m4ob4b.css';
import '../../css/b/bzd7kbc5v.css';
import '../../css/n/n8gxhrbom.css';
import '../../css/w/wwu6_xbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="ftb7s8b8n"/><path class="mn8m4ob4b"/><path class="bzd7kbc5v"/><path class="n8gxhrbom"/><path class="wwu6_xbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:air-conditioner-rear-1"} {...others} />);
}

export default Component;
