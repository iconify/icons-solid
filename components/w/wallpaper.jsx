import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf5r49box.css';
import '../../css/e/e2i1rhbxz.css';
import '../../css/d/dvzra1brn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uf5r49box"/><circle class="e2i1rhbxz"/><path class="dvzra1brn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallpaper"} {...others} />);
}

export default Component;
