import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fcvxr4fnn.css';
import '../../css/o/o9ljgk76w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="fcvxr4fnn"/><path class="o9ljgk76w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mushroom"} {...others} />);
}

export default Component;
