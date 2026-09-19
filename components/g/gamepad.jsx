import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uxr4w2oog.css';
import '../../css/o/ox6bfvkrd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="uxr4w2oog"/><path class="ox6bfvkrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gamepad"} {...others} />);
}

export default Component;
