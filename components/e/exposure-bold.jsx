import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyj1zdbps.css';
import '../../css/d/do94kcirf.css';
import '../../css/m/mvqn6zbzw.css';
import '../../css/z/zc_5uebyc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nyj1zdbps"/><path class="do94kcirf"/><path class="mvqn6zbzw"/><path class="zc_5uebyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:exposure-bold"} {...others} />);
}

export default Component;
