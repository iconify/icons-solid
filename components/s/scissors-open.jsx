import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iporvewwo.css';
import '../../css/v/vf5jtqb5z.css';
import '../../css/e/ecam5r2nq.css';
import '../../css/z/zybhtbb_p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="iporvewwo"/><path class="vf5jtqb5z"/><path class="ecam5r2nq"/><path clip-rule="evenodd" class="zybhtbb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scissors-open"} {...others} />);
}

export default Component;
