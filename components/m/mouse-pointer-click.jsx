import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xte15ybwf.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zt_avhvgm.css';
import '../../css/q/qn9njliif.css';
import '../../css/a/anqoa844g.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xtf5wmb9i.css';
import '../../css/k/kr2ebmbbz.css';
import '../../css/r/r-1cu3vrv.css';
import '../../css/n/njrdcwbfu.css';
import '../../css/d/dbiqc1bjn.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGm69swdsA" class="xte15ybwf"/></defs><g class="t_2lkqbxb"><path class="wm-shadow zt_avhvgm"/><path class="qn9njliif"/><path class="anqoa844g"/><use href="#SVGm69swdsA" class="d2kvgvbvc"/><path class="xtf5wmb9i"/><use href="#SVGm69swdsA" class="d2kvgvbvc"/><path class="kr2ebmbbz"/><path class="r-1cu3vrv wm-s"/><path class="njrdcwbfu wm-s"/><path class="dbiqc1bjn wm-s"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mouse-pointer-click"} {...others} />);
}

export default Component;
