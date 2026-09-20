import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/adqa7173x.css';
import '../../css/u/us043obkx.css';
import '../../css/i/inuemh_cj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="adqa7173x"/><circle class="us043obkx"/><rect transform="rotate(-45 7 7)" class="inuemh_cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-warning-diamond-diamond-alert-warning-frame-exclamation-caution"} {...others} />);
}

export default Component;
