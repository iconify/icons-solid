import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v_m4j6bbh.css';
import '../../css/j/j1nodtiig.css';
import '../../css/k/k_lneb11t.css';
import '../../css/l/l6dupo41k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v_m4j6bbh"/><path class="j1nodtiig wm-shine"/><path class="k_lneb11t wm-k"/><path class="l6dupo41k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:archive-restore"} {...others} />);
}

export default Component;
