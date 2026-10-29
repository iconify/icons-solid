import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwjrdr7_z.css';
import '../../css/s/s_246623q.css';
import '../../css/f/f6q2p9-uo.css';
import '../../css/g/gtcg0451k.css';
import '../../css/m/m7vo4x6eb.css';
import '../../css/c/cz3t5gbdf.css';
import '../../css/j/j6t390b5t.css';
import '../../css/p/pral5ebon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nwjrdr7_z wm-k"/><path class="s_246623q wm-k"/><path class="f6q2p9-uo wm-k"/><path class="gtcg0451k wm-shine"/><path class="m7vo4x6eb wm-a"/><path class="cz3t5gbdf wm-a"/><path class="j6t390b5t wm-a"/><path class="pral5ebon wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:external-link"} {...others} />);
}

export default Component;
