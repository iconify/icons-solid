import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cbx_xq3zq.css';
import '../../css/q/qzek6abxz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cbx_xq3zq"/><path class="qzek6abxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:discussion-converstion-reply"} {...others} />);
}

export default Component;
