import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6002409d.css';
import '../../css/z/zgwus9b_j.css';
import '../../css/z/zkx_vjfdo.css';
import '../../css/u/ugfkuob0i.css';
import '../../css/p/pdrx4wm6w.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nxl1hvbky.css';
import '../../css/e/e-few8b-q.css';
import '../../css/m/mh7ybbagj.css';
import '../../css/v/vm81flivr.css';
import '../../css/c/cdxfyxbns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6002409d"/><path class="zgwus9b_j"/><path class="zkx_vjfdo"/><path class="ugfkuob0i"/><path class="pdrx4wm6w"/><g class="xtpeb-edw"><path class="nxl1hvbky"/><path class="e-few8b-q"/><path class="mh7ybbagj"/><path class="vm81flivr"/><path class="cdxfyxbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-2-bold-duotone"} {...others} />);
}

export default Component;
