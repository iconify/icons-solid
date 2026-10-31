import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y13z_zbwg.css';
import '../../css/b/bupjy3gdf.css';
import '../../css/y/yrptk-5tw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="wm-k y13z_zbwg"/><path class="bupjy3gdf wm-a"/><path class="wm-deco yrptk-5tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:firecracker-gloss"} {...others} />);
}

export default Component;
