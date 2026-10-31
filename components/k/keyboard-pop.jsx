import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc_8zr7vq.css';
import '../../css/l/la3fbtxxr.css';
import '../../css/o/o3hzj7bgp.css';
import '../../css/k/k54zgbbsu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vc_8zr7vq"/><path class="la3fbtxxr"/><path class="o3hzj7bgp"/><path class="k54zgbbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:keyboard-pop"} {...others} />);
}

export default Component;
