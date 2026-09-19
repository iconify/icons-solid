import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ituhl-r_b.css';
import '../../css/o/ovbf84bqb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ituhl-r_b"/><path class="ovbf84bqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flag-bold"} {...others} />);
}

export default Component;
