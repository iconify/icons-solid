import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kiog8bb9w.css';
import '../../css/a/aaib_ftaz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="kiog8bb9w"/><path class="aaib_ftaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tags"} {...others} />);
}

export default Component;
