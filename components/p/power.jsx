import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/f/ffio8wb1y.css';
import '../../css/f/fdf08cccu.css';
import '../../css/b/bko03hbet.css';
import '../../css/s/sxcnhep5a.css';
import '../../css/t/tgq4knbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="ffio8wb1y wm-k"/><path class="fdf08cccu wm-shine"/><path class="bko03hbet wm-a"/><path class="sxcnhep5a wm-a"/><path class="tgq4knbvb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:power"} {...others} />);
}

export default Component;
