import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/x/x7lx5ibwh.css';
import '../../css/t/tig3l-bhv.css';
import '../../css/e/ear1j4bob.css';
import '../../css/e/e5v4bybmd.css';
import '../../css/w/wkqwx3fep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="x7lx5ibwh"/><path class="tig3l-bhv"/><path class="ear1j4bob"/><path class="e5v4bybmd"/><path class="wkqwx3fep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:badge-dollar-sign"} {...others} />);
}

export default Component;
