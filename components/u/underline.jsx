import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hoaj_8ozi.css';
import '../../css/k/k1aodebtk.css';
import '../../css/i/ig07oub3b.css';
import '../../css/q/q9wjfmbme.css';
import '../../css/h/h_sfh-buu.css';
import '../../css/r/rz2ii4-xi.css';
import '../../css/e/e-ww87q2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hoaj_8ozi wm-k"/><path class="k1aodebtk wm-k"/><path class="ig07oub3b wm-k"/><path class="q9wjfmbme wm-shine"/><path class="h_sfh-buu wm-a"/><path class="rz2ii4-xi wm-a"/><path class="e-ww87q2y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:underline"} {...others} />);
}

export default Component;
