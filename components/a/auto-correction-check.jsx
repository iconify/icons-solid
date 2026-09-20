import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uh5e88bra.css';
import '../../css/b/bo_if5bod.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uh5e88bra"/><path class="bo_if5bod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:auto-correction-check"} {...others} />);
}

export default Component;
