import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khxma8kyi.css';
import '../../css/h/hsdwt973y.css';
import '../../css/s/stgidx8-i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="khxma8kyi"/><path clip-rule="evenodd" class="hsdwt973y"/><path clip-rule="evenodd" class="stgidx8-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:basketball"} {...others} />);
}

export default Component;
