import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/ta9n-cbnj.css';
import '../../css/w/wqx7ggb3v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ta9n-cbnj"/><path class="wqx7ggb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:iron"} {...others} />);
}

export default Component;
