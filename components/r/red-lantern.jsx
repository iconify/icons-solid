import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pt40wdbia.css';
import '../../css/q/qygcidnho.css';
import '../../css/n/n25ic8b8v.css';
import '../../css/j/jctdxt1ih.css';
import '../../css/e/eu9j6fa0x.css';
import '../../css/t/tjg_hjbbx.css';
import '../../css/o/o9kaym6ay.css';
import '../../css/t/t53kkjdxd.css';
import '../../css/r/r0bhg2b9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pt40wdbia wm-k"/><path class="qygcidnho wm-a"/><path class="n25ic8b8v wm-deco"/><path class="jctdxt1ih wm-k"/><path class="eu9j6fa0x wm-k"/><path class="tjg_hjbbx wm-a"/><path class="o9kaym6ay wm-shadow"/><path class="t53kkjdxd wm-shine"/><path class="r0bhg2b9m wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:red-lantern"} {...others} />);
}

export default Component;
