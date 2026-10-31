import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r4c8mnv3b.css';
import '../../css/e/epwrxfrqm.css';
import '../../css/t/t1hkudb-d.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r4c8mnv3b"/><path class="epwrxfrqm wm-shine"/><path class="t1hkudb-d wm-k"/><path class="wm-a wp31-1bdq"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paste"} {...others} />);
}

export default Component;
