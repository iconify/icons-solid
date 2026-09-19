import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rx43c093u.css';
import '../../css/u/udbsbtb7h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="rx43c093u"/><path class="udbsbtb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:door-open-1"} {...others} />);
}

export default Component;
