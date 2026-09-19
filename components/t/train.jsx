import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oicxziely.css';
import '../../css/k/kmxohsb8h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="oicxziely"/><path class="kmxohsb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:train"} {...others} />);
}

export default Component;
