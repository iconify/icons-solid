import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy3iys55x.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/ll-icvwkg.css';
import '../../css/a/awmhk651z.css';
import '../../css/r/rbvma8b0a.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y0n_xcbej.css';
import '../../css/p/p49om9i4i.css';
import '../../css/w/wlgidb5_v.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGkS4hXKWL" class="fy3iys55x"/></defs><g class="t_2lkqbxb"><path class="ll-icvwkg wm-shadow"/><path class="awmhk651z"/><path class="rbvma8b0a"/><use href="#SVGkS4hXKWL" class="d2kvgvbvc"/><path class="y0n_xcbej"/><use href="#SVGkS4hXKWL" class="d2kvgvbvc"/><path class="p49om9i4i"/><path class="wlgidb5_v wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:router"} {...others} />);
}

export default Component;
