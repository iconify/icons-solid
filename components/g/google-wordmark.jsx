import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikhq3zksb.css';
import '../../css/q/qhcv_f3zo.css';
import '../../css/n/nk66vubau.css';
import '../../css/c/c6p64f2bo.css';
import '../../css/g/g65477bmz.css';
import '../../css/w/waqn2q7zx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ikhq3zksb"/><path class="qhcv_f3zo"/><path class="nk66vubau"/><path class="c6p64f2bo"/><path class="g65477bmz"/><path class="waqn2q7zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:google-wordmark"} {...others} />);
}

export default Component;
