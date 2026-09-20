import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m38vqmj1i.css';
import '../../css/e/e0df4-ldh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="m38vqmj1i"/><path class="e0df4-ldh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:signage-1"} {...others} />);
}

export default Component;
