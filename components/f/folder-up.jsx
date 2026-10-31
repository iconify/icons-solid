import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/k/k3vnpvaaa.css';
import '../../css/h/h782jfhhi.css';
import '../../css/e/enu7vac0s.css';
import '../../css/p/pb34qabzy.css';
import '../../css/d/dnc7glw4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="k3vnpvaaa"/><path class="h782jfhhi"/><path class="enu7vac0s"/><path class="pb34qabzy"/><path class="dnc7glw4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-up"} {...others} />);
}

export default Component;
