import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wq8byqbck.css';
import '../../css/t/ttxflub-j.css';
import '../../css/z/zase50b_k.css';
import '../../css/i/iwjqy31kx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wq8byqbck"/><path class="ttxflub-j"/><path class="zase50b_k"/><path class="iwjqy31kx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wind-surf"} {...others} />);
}

export default Component;
