import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/c/cpfwexbue.css';
import '../../css/k/k9vjllaho.css';
import '../../css/y/ytbzw5b4d.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yzc-uvnxq.css';
import '../../css/e/et89ocysv.css';
import '../../css/f/fxx9hpbvk.css';
import '../../css/n/n4icfmbzq.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><circle class="cpfwexbue"/><path class="k9vjllaho"/></g><path class="ytbzw5b4d"/><g class="brzn_0bpr"><path class="yzc-uvnxq"/><circle class="et89ocysv"/><path class="fxx9hpbvk"/><path class="n4icfmbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-surfing-medium-dark-skin-tone"} {...others} />);
}

export default Component;
