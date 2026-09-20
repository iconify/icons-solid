import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q1dc64bou.css';
import '../../css/t/t4os46ber.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="q1dc64bou"/><path class="t4os46ber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bill-2"} {...others} />);
}

export default Component;
