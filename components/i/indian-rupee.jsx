import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk1fkeb8a.css';
import '../../css/d/dckoivbei.css';
import '../../css/e/etmwy_fbm.css';
import '../../css/u/ur5-oweuc.css';
import '../../css/n/nu2ysbcwb.css';
import '../../css/c/cht62wbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pk1fkeb8a wm-shadow"/><path class="dckoivbei wm-k"/><path class="etmwy_fbm wm-k"/><path class="ur5-oweuc wm-k"/><path class="nu2ysbcwb wm-k"/><path class="cht62wbsw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:indian-rupee"} {...others} />);
}

export default Component;
