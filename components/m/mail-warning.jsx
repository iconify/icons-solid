import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w--0pfhxp.css';
import '../../css/b/bcclgjbwf.css';
import '../../css/w/wc8c5ml-l.css';
import '../../css/j/j8sph-c2k.css';
import '../../css/g/gu44acclc.css';
import '../../css/i/i8rtp9bso.css';
import '../../css/e/e4zb-gndq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w--0pfhxp wm-shadow"/><path class="bcclgjbwf"/><path class="wc8c5ml-l"/><path class="j8sph-c2k"/><path class="gu44acclc"/><path class="i8rtp9bso"/><path class="e4zb-gndq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mail-warning"} {...others} />);
}

export default Component;
