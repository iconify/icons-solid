import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/beb98_g7k.css';
import '../../css/d/dxwbwrvbe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="beb98_g7k"/><path class="dxwbwrvbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:discount-percent-badge"} {...others} />);
}

export default Component;
