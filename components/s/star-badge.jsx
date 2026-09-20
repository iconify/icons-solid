import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ckux6ecyv.css';
import '../../css/j/jgufu3bie.css';
import '../../css/h/h_u4o-q2b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ckux6ecyv"/><path class="jgufu3bie"/><path class="h_u4o-q2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:star-badge"} {...others} />);
}

export default Component;
