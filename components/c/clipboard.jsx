import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ugraqkb-s.css';
import '../../css/u/ukr91obvv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ugraqkb-s"/><path class="ukr91obvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clipboard"} {...others} />);
}

export default Component;
