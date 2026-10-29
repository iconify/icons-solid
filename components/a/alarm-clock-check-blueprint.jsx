import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ugxv4_b0y.css';
import '../../css/s/smef6l1jg.css';
import '../../css/q/qhj6u7bmm.css';
import '../../css/j/jk7ggdcef.css';
import '../../css/g/ghyktpbhu.css';
import '../../css/c/c91kb2byc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ugxv4_b0y wm-deco"/><path class="smef6l1jg wm-deco"/><path class="qhj6u7bmm wm-deco"/><path class="jk7ggdcef wm-k"/><path class="ghyktpbhu wm-a"/><path class="c91kb2byc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alarm-clock-check-blueprint"} {...others} />);
}

export default Component;
