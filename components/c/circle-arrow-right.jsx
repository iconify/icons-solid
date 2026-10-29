import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/x/x5z1qdkrd.css';
import '../../css/f/fdf08cccu.css';
import '../../css/a/ab6tlri0a.css';
import '../../css/l/l5q-ktbzv.css';
import '../../css/z/zkrhqjhfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="wm-k x5z1qdkrd"/><path class="fdf08cccu wm-shine"/><path class="ab6tlri0a wm-a"/><path class="l5q-ktbzv wm-a"/><path class="wm-a zkrhqjhfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-arrow-right"} {...others} />);
}

export default Component;
