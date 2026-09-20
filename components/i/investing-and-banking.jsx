import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sbcd_5tax.css';
import '../../css/u/ufu2_qb1e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="sbcd_5tax"/><path class="ufu2_qb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:investing-and-banking"} {...others} />);
}

export default Component;
