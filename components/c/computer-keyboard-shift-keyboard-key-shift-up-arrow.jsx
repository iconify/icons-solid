import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/x/x-nbi703s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><path class="x-nbi703s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-keyboard-shift-keyboard-key-shift-up-arrow"} {...others} />);
}

export default Component;
