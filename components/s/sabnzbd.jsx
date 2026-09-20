import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2zihunpi.css';
import '../../css/n/nuiom3xgn.css';
import '../../css/u/u07xh6bzl.css';
import '../../css/r/ra5mw5bki.css';
import '../../css/i/ip8mjmxtv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t2zihunpi"/><path class="nuiom3xgn"/><path class="u07xh6bzl"/><path class="ra5mw5bki"/><path class="ip8mjmxtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sabnzbd"} {...others} />);
}

export default Component;
