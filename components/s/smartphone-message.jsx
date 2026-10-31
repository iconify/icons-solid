import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rdmrkzp-m.css';
import '../../css/z/zyd-zmbjs.css';
import '../../css/e/ei_z-ccpt.css';
import '../../css/s/syi_mbbeo.css';
import '../../css/f/ftvjd0bjc.css';
import '../../css/m/my3z1pb5o.css';
import '../../css/f/fpuj95bar.css';
import '../../css/n/nb62d4zma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rdmrkzp-m wm-shadow"/><path class="zyd-zmbjs"/><path class="ei_z-ccpt"/><path class="syi_mbbeo"/><path class="ftvjd0bjc"/><path class="my3z1pb5o wm-s"/><path class="fpuj95bar wm-s"/><path class="nb62d4zma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:smartphone-message"} {...others} />);
}

export default Component;
