import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/syx38htpu.css';
import '../../css/g/g3-oxpgnl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="syx38htpu"/><path class="g3-oxpgnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:tea-cup"} {...others} />);
}

export default Component;
