import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w4fklccqs.css';
import '../../css/m/m31eqficj.css';
import '../../css/u/u_96bpbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w4fklccqs wm-k"/><path class="m31eqficj wm-a"/><path class="u_96bpbnz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:fingerprint"} {...others} />);
}

export default Component;
