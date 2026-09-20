import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hkmmighke.css';
import '../../css/g/gzue5abyy.css';
import '../../css/m/m4pb00bvr.css';
import '../../css/a/akncx2b7j.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="hkmmighke"/><path class="gzue5abyy"/><path class="m4pb00bvr"/><path class="akncx2b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:music-file-2"} {...others} />);
}

export default Component;
