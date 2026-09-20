import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vdfihdvdo.css';
import '../../css/e/eda339blr.css';
import '../../css/p/p_by_acur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vdfihdvdo"/><path class="eda339blr"/><path class="p_by_acur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:information-desk-customer"} {...others} />);
}

export default Component;
