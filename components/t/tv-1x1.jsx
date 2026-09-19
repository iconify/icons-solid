import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph7ywgniq.css';
import '../../css/p/ppczo4bnc.css';
import '../../css/q/qrfyc6bed.css';
import '../../css/r/rjpniljif.css';
import '../../css/f/frsjfwbll.css';
import '../../css/v/v3canabei.css';
import '../../css/k/kygbgobqf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ph7ywgniq"/><path class="ppczo4bnc"/><path class="qrfyc6bed"/><path class="rjpniljif"/><path class="frsjfwbll"/><path class="v3canabei"/><path class="kygbgobqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tv-1x1"} {...others} />);
}

export default Component;
