import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/x3wzh0nry.css';
import '../../css/e/eyoi2bc2v.css';
import '../../css/j/jjo68edcg.css';
import '../../css/i/ihukjfb_k.css';
import '../../css/p/pm2luqb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6hOdFdhw" x1="9" x2="15" y1="3.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG6hOdFdhw)" class="x3wzh0nry"/><path class="eyoi2bc2v wm-a"/><path class="jjo68edcg wm-shine"/><path class="ihukjfb_k wm-shine"/><path class="pm2luqb2s wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:certificate"} {...others} />);
}

export default Component;
