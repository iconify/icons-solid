import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pcphqf2zf.css';
import '../../css/g/g840b1b6h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pcphqf2zf"/><path class="g840b1b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:desktop-screensaver-sleep"} {...others} />);
}

export default Component;
