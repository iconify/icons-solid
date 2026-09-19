import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yp2pgobra.css';
import '../../css/t/t2s1tmb8r.css';
import '../../css/w/wa95x5b1d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="yp2pgobra"/><ellipse class="t2s1tmb8r"/><path class="wa95x5b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:music-note"} {...others} />);
}

export default Component;
