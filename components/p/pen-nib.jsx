import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prlpwhbwu.css';
import '../../css/k/kf9dyobbi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="prlpwhbwu"/><path class="kf9dyobbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pen-nib"} {...others} />);
}

export default Component;
