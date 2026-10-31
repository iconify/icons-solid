import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h_gwlnd1w.css';
import '../../css/p/pjhix7_yx.css';
import '../../css/r/rn913dbor.css';
import '../../css/w/wcttivblm.css';
import '../../css/o/o53n0ib2h.css';
import '../../css/e/eoszubpxx.css';
import '../../css/v/vmfyrwbzv.css';
import '../../css/n/nq6wm388v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h_gwlnd1w"/><path class="pjhix7_yx"/><path class="rn913dbor wm-shine"/><path class="wcttivblm wm-k"/><path class="o53n0ib2h wm-a"/><path class="eoszubpxx"/><path class="vmfyrwbzv"/><path class="nq6wm388v wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:database"} {...others} />);
}

export default Component;
