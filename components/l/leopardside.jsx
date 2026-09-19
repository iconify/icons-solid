import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og_aqzi4z.css';
import '../../css/p/pgp7o31co.css';
import '../../css/e/e40x7r53o.css';
import '../../css/y/yyajr-0pn.css';
import '../../css/s/s0fnu0zrk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="og_aqzi4z"/><path class="pgp7o31co"/><path class="e40x7r53o"/><path class="yyajr-0pn"/><path class="s0fnu0zrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:leopardside"} {...others} />);
}

export default Component;
