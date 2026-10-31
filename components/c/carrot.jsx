import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gs3pyp3wh.css';
import '../../css/v/vkhts2bcq.css';
import '../../css/k/kqp_we97z.css';
import '../../css/d/domdhwbzo.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="gs3pyp3wh"/><path class="vkhts2bcq wm-shine"/><path class="kqp_we97z wm-k"/><path class="domdhwbzo wm-a"/><path class="uooj9_soa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:carrot"} {...others} />);
}

export default Component;
