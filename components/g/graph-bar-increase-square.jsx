import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yivttkrvg.css';
import '../../css/l/lny3dw69s.css';
import '../../css/n/nfq25ebpr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yivttkrvg"/><path class="lny3dw69s"/><path class="nfq25ebpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:graph-bar-increase-square"} {...others} />);
}

export default Component;
