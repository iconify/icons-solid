import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zimg7hbbm.css';
import '../../css/b/bcclgjbwf.css';
import '../../css/i/it95ezhzb.css';
import '../../css/j/j8sph-c2k.css';
import '../../css/g/gu44acclc.css';
import '../../css/i/i8rtp9bso.css';
import '../../css/a/aggidgbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zimg7hbbm"/><path class="bcclgjbwf"/><path class="it95ezhzb"/><path class="j8sph-c2k"/><path class="gu44acclc"/><path class="i8rtp9bso"/><path class="aggidgbug wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mail-x"} {...others} />);
}

export default Component;
