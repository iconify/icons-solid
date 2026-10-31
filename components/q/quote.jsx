import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0qrrpb4b.css';
import '../../css/c/cao10bbzt.css';
import '../../css/n/n_3saebcl.css';
import '../../css/o/os71or08p.css';
import '../../css/s/sdec5hb2a.css';
import '../../css/f/fpemb2b6d.css';
import '../../css/x/xzce4bc5q.css';
import '../../css/h/hp0g5bc0s.css';
import '../../css/j/jhhiehbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k0qrrpb4b wm-shadow"/><path class="cao10bbzt wm-k"/><path class="n_3saebcl wm-k"/><path class="os71or08p wm-k"/><path class="sdec5hb2a wm-k"/><path class="fpemb2b6d wm-shine"/><path class="wm-k xzce4bc5q"/><path class="hp0g5bc0s wm-k"/><path class="jhhiehbkj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:quote"} {...others} />);
}

export default Component;
