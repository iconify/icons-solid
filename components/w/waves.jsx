import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kfoxa_z9z.css';
import '../../css/k/kvdaehorh.css';
import '../../css/y/ydmyb5ahc.css';
import '../../css/s/s7ii38vjp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kfoxa_z9z"/><path class="kvdaehorh"/><path class="ydmyb5ahc"/><path class="s7ii38vjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:waves"} {...others} />);
}

export default Component;
