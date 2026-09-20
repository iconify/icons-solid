import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/inuemh_cj.css';
import '../../css/p/plqj0diha.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(-45 7 7)" class="inuemh_cj"/><path class="plqj0diha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-expand-vertical-diamond-arrow-diamond-data-vertical-data-internet-transfer-network"} {...others} />);
}

export default Component;
