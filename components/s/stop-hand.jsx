import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x70hj8-4s.css';
import '../../css/k/kxghb_b9a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="x70hj8-4s"/><path class="kxghb_b9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-hand"} {...others} />);
}

export default Component;
