import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-yjfcb5d.css';
import '../../css/t/tg90wxiym.css';
import '../../css/j/j9y_6hxua.css';
import '../../css/n/nastu9b4u.css';
import '../../css/z/zkqhonp7b.css';
import '../../css/l/l5dd8nbmt.css';
import '../../css/p/p55qcraov.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGCuXikGDz" cx="97.2" cy="100" r="16" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-yjfcb5d"/><stop offset=".85" class="tg90wxiym"/><stop offset="1" class="tg90wxiym"/></radialGradient></defs><path class="j9y_6hxua"/><path class="nastu9b4u"/><path class="zkqhonp7b"/><path class="l5dd8nbmt"/><path fill="url(#SVGCuXikGDz)" transform="matrix(2.5 0 0 2.5 2.86 2.86)" class="p55qcraov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:snowflake"} {...others} />);
}

export default Component;
