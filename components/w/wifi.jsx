import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kqp5fccbo.css';
import '../../css/d/dhh47o0_z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="kqp5fccbo"/><path class="dhh47o0_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi"} {...others} />);
}

export default Component;
