import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ubyftdn1r.css';
import '../../css/f/fr7u0ubhf.css';
import '../../css/d/d6woa2e3g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ubyftdn1r"/><path class="fr7u0ubhf"/><path class="d6woa2e3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-flood"} {...others} />);
}

export default Component;
