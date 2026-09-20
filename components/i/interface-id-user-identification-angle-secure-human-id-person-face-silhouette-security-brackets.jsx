import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uem5z8b7y.css';
import '../../css/c/capt-obsi.css';
import '../../css/q/q7ba_ub_d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uem5z8b7y"/><circle class="capt-obsi"/><path class="q7ba_ub_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-id-user-identification-angle-secure-human-id-person-face-silhouette-security-brackets"} {...others} />);
}

export default Component;
