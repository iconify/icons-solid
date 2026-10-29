import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ylonyhb_x.css';
import '../../css/j/jqqyzkbrt.css';
import '../../css/k/k8acwdlxc.css';
import '../../css/u/udmdz0-rj.css';
import '../../css/m/m0qvomb9d.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ylonyhb_x"/><path class="jqqyzkbrt"/><path class="k8acwdlxc"/><path class="udmdz0-rj"/><path class="m0qvomb9d wm-shine"/><path class="wdphd8b3t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:recycle"} {...others} />);
}

export default Component;
