import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnwis3bxs.css';
import '../../css/i/indak7m3m.css';
import '../../css/l/l5nfperrg.css';
import '../../css/d/dyawbzbqh.css';
import '../../css/i/ij79_gt6o.css';
import '../../css/j/jyw491ymo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bnwis3bxs wm-k"/><path class="indak7m3m wm-s"/><path class="l5nfperrg wm-deco"/><path class="dyawbzbqh wm-k"/><path class="ij79_gt6o wm-s"/><path class="jyw491ymo wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:package-plus"} {...others} />);
}

export default Component;
