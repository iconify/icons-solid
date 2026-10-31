import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kx9i9457l.css';
import '../../css/q/q1ehkzblm.css';
import '../../css/n/nx5fowxhe.css';
import '../../css/v/vn8-qxupk.css';
import '../../css/k/kg6-vmgwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kx9i9457l"/><path class="q1ehkzblm wm-shine"/><path class="nx5fowxhe wm-k"/><path class="vn8-qxupk wm-a"/><path class="kg6-vmgwc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:alpana"} {...others} />);
}

export default Component;
