import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tuzadacre.css';
import '../../css/b/bk0qv0b1y.css';
import '../../css/m/m82dd5dux.css';
import '../../css/m/mj_2edb6o.css';
import '../../css/f/fkys8dbwr.css';
import '../../css/m/mxga82b4h.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tuzadacre wm-shadow"/><path class="bk0qv0b1y"/><path class="m82dd5dux"/><path class="mj_2edb6o"/><path class="fkys8dbwr"/><path class="mxga82b4h"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lightbulb-off"} {...others} />);
}

export default Component;
