import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r55_ti-mc.css';
import '../../css/i/i6zqs99qy.css';
import '../../css/z/zjgiddbbs.css';
import '../../css/h/hrzpfy_gu.css';
import '../../css/e/e_tlzepxc.css';
import '../../css/y/ymh5leewq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r55_ti-mc wm-k"/><path class="i6zqs99qy wm-deco"/><path class="wm-k zjgiddbbs"/><path class="hrzpfy_gu wm-k"/><path class="e_tlzepxc wm-shadow"/><path class="wm-shine ymh5leewq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-image"} {...others} />);
}

export default Component;
