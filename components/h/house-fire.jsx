import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq4i7fvzd.css';
import '../../css/q/q24g43u1c.css';
import '../../css/f/ficclfbro.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xq4i7fvzd"/><path class="q24g43u1c"/><path class="ficclfbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-fire"} {...others} />);
}

export default Component;
