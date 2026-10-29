import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bmk8z0bah.css';
import '../../css/p/p2gwa5lhn.css';
import '../../css/d/dmbh9qbiz.css';
import '../../css/r/r_5x2fgpt.css';
import '../../css/a/ar8po3b0p.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bmk8z0bah wm-shadow"/><path class="p2gwa5lhn"/><path class="dmbh9qbiz"/><path class="r_5x2fgpt"/><path class="ar8po3b0p wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:dollar-sign"} {...others} />);
}

export default Component;
