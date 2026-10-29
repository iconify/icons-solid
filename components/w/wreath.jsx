import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o3y722rod.css';
import '../../css/n/n9ti5j9_g.css';
import '../../css/y/y57d06b0a.css';
import '../../css/r/r_u39dbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o3y722rod wm-k"/><path class="n9ti5j9_g wm-a"/><path class="y57d06b0a"/><path class="r_u39dbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wreath"} {...others} />);
}

export default Component;
