import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/c/czy5lsm-m.css';
import '../../css/u/uucqckbpy.css';
import '../../css/p/p2enzxkpu.css';
import '../../css/q/q-1v3rbwk.css';
import '../../css/l/l322s4hry.css';
import '../../css/x/x1md8wo2d.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><path class="czy5lsm-m"/><path class="uucqckbpy"/><path class="p2enzxkpu"/></g><path class="q-1v3rbwk"/><circle class="l322s4hry"/><path class="x1md8wo2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:basket"} {...others} />);
}

export default Component;
