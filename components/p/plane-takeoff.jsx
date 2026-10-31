import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fcz9jen3o.css';
import '../../css/t/tg-b_sc3w.css';
import '../../css/m/maqav1bwd.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fcz9jen3o"/><path class="tg-b_sc3w wm-shine"/><path class="maqav1bwd wm-k"/><path class="u83h24b3i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:plane-takeoff"} {...others} />);
}

export default Component;
