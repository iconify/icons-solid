import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lois21b9k.css';
import '../../css/f/f0wtsnbgt.css';
import '../../css/u/unbzmcbnj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lois21b9k"/><path class="f0wtsnbgt"/><path class="unbzmcbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:zoom-out-gesture"} {...others} />);
}

export default Component;
