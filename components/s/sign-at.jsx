import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/he_r8ac7b.css';
import '../../css/r/rl2gn8bfm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="he_r8ac7b"/><path class="rl2gn8bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:sign-at"} {...others} />);
}

export default Component;
