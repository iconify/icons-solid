import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jh5nocbzb.css';
import '../../css/g/g1p3n-bzh.css';
import '../../css/d/d2h7x8bev.css';
import '../../css/i/ibzfanbqt.css';
import '../../css/z/zzil4ccrs.css';
import '../../css/g/gmutfhb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jh5nocbzb wm-deco"/><path class="g1p3n-bzh wm-deco"/><path class="d2h7x8bev wm-deco"/><path class="ibzfanbqt wm-k"/><path class="wm-a zzil4ccrs"/><path class="gmutfhb1q wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mehndi-hand-blueprint"} {...others} />);
}

export default Component;
