import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/amxrj0_qq.css';
import '../../css/m/mee3dzblk.css';
import '../../css/p/peu007b-y.css';
import '../../css/m/meogk_ylc.css';
import '../../css/i/ias_7wphn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="amxrj0_qq wm-deco"/><path class="mee3dzblk wm-deco"/><path class="peu007b-y wm-k"/><path class="meogk_ylc wm-a"/><path class="ias_7wphn wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-check-blueprint"} {...others} />);
}

export default Component;
