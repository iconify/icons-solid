import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztlbgvb3t.css';
import '../../css/o/oze9kib8v.css';
import '../../css/i/i1yucs2ho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ztlbgvb3t"/><path class="oze9kib8v"/><path class="i1yucs2ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:airplay-solid-expressive"} {...others} />);
}

export default Component;
