import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5-7icb9s.css';
import '../../css/c/croo-5lrm.css';
import '../../css/w/wo-4cab7x.css';
import '../../css/e/ewuds8fst.css';
import '../../css/e/ejkmvzbju.css';
import '../../css/x/x5pfhnbua.css';
import '../../css/z/zgz92y-2j.css';
import '../../css/r/r9j58xbee.css';
import '../../css/u/uxev2bb0s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r5-7icb9s"/><path class="croo-5lrm"/><path class="wo-4cab7x"/><path class="ewuds8fst"/><path class="ejkmvzbju"/><path class="x5pfhnbua"/><path class="zgz92y-2j"/><path class="r9j58xbee"/><path class="uxev2bb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tropicaldrink"} {...others} />);
}

export default Component;
