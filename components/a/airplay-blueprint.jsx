import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v0q8bnnhd.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/e/egk8xcczi.css';
import '../../css/t/t0vujibsu.css';
import '../../css/y/yjl2qn3qm.css';
import '../../css/n/naemrts2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v0q8bnnhd wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="egk8xcczi wm-k"/><path class="t0vujibsu wm-a"/><path class="wm-k yjl2qn3qm"/><path class="naemrts2p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:airplay-blueprint"} {...others} />);
}

export default Component;
