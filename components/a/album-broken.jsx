import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fz0s1h59r.css';
import '../../css/k/kek38hw4x.css';
import '../../css/z/z__g5t12m.css';
import '../../css/j/jzpwi7boj.css';
import '../../css/z/zw3qidbio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fz0s1h59r"/><path class="kek38hw4x"/><path class="z__g5t12m"/><circle class="jzpwi7boj"/><path class="zw3qidbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-broken"} {...others} />);
}

export default Component;
