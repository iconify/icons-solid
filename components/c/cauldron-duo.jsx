import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o3vojkblm.css';
import '../../css/v/vexk5vbyr.css';
import '../../css/j/j1e8ltbij.css';
import '../../css/i/iqvv-4b4a.css';
import '../../css/c/cabg2xbqn.css';
import '../../css/h/hx783jr7y.css';
import '../../css/c/cq7w1r5-n.css';
import '../../css/f/f3kvwabys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o3vojkblm wm-a"/><path class="vexk5vbyr"/><path class="j1e8ltbij"/><path class="iqvv-4b4a wm-s"/><path class="cabg2xbqn wm-s"/><path class="hx783jr7y wm-a"/><path class="cq7w1r5-n"/><path class="f3kvwabys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cauldron-duo"} {...others} />);
}

export default Component;
