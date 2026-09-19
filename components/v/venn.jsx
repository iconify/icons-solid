import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx0j3m0za.css';
import '../../css/s/sevn03bfn.css';
import '../../css/m/m6j3t8g_p.css';
import '../../css/b/bmnt2jk-i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="mx0j3m0za"><path class="sevn03bfn"/><path class="m6j3t8g_p"/><path class="bmnt2jk-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:venn"} {...others} />);
}

export default Component;
