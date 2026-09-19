import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/slr0pnb7r.css';
import '../../css/f/fsae2ipvt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="slr0pnb7r"/><path class="fsae2ipvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dollar-bills"} {...others} />);
}

export default Component;
