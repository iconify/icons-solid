import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yf3vvwebd.css';
import '../../css/b/bjtncabwp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yf3vvwebd"/><path class="bjtncabwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-identifier-card"} {...others} />);
}

export default Component;
