import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/c/cpfwexbue.css';
import '../../css/k/k9vjllaho.css';
import '../../css/v/vz_vbwbuy.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/l/lu9ha1b5u.css';
import '../../css/e/et89ocysv.css';
import '../../css/f/fxx9hpbvk.css';
import '../../css/c/caaiwg7ij.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="cpfwexbue"/><path class="k9vjllaho"/></g><path class="vz_vbwbuy"/><g class="brzn_0bpr"><path class="lu9ha1b5u"/><circle class="et89ocysv"/><path class="fxx9hpbvk"/><path class="caaiwg7ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-surfing"} {...others} />);
}

export default Component;
