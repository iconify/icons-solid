import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kw5txwb9y.css';
import '../../css/x/x512ovbom.css';
import '../../css/z/zpedpbbsy.css';
import '../../css/d/drngy167u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kw5txwb9y"/><path class="x512ovbom"/><path class="zpedpbbsy"/><path class="drngy167u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:video-swap-camera"} {...others} />);
}

export default Component;
