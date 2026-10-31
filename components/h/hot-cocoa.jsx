import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pf_k1dbuk.css';
import '../../css/z/zky4zm5fw.css';
import '../../css/o/or06vwbgm.css';
import '../../css/z/zwdjupehy.css';
import '../../css/r/rh3n02bpi.css';
import '../../css/w/wahc7nbdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pf_k1dbuk wm-shadow"/><path class="zky4zm5fw"/><path class="or06vwbgm"/><path class="zwdjupehy"/><path class="rh3n02bpi"/><path class="wahc7nbdm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hot-cocoa"} {...others} />);
}

export default Component;
