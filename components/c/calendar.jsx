import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wghhn2b4n.css';
import '../../css/u/u3npkshsu.css';
import '../../css/g/gx_g0cb7y.css';
import '../../css/g/gg0ah_btc.css';
import '../../css/n/nyhdtzkrj.css';
import '../../css/o/od2s8-bxi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wghhn2b4n"/><path class="u3npkshsu"/><path class="gx_g0cb7y"/><path class="gg0ah_btc"/><path class="nyhdtzkrj"/><path class="od2s8-bxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:calendar"} {...others} />);
}

export default Component;
