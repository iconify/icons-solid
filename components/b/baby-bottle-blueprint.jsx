import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v7_rfr9_s.css';
import '../../css/t/t4z_kdmpn.css';
import '../../css/b/b2arenbhk.css';
import '../../css/h/hf0bzw-qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v7_rfr9_s wm-deco"/><path class="t4z_kdmpn wm-deco"/><path class="b2arenbhk wm-k"/><path class="hf0bzw-qm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baby-bottle-blueprint"} {...others} />);
}

export default Component;
