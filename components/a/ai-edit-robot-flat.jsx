import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_0ddr9ou.css';
import '../../css/i/ihpflcc3e.css';
import '../../css/d/dgv9thbiw.css';
import '../../css/r/rn733rm6p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b_0ddr9ou"/><path clip-rule="evenodd" class="ihpflcc3e"/><path class="dgv9thbiw"/><path clip-rule="evenodd" class="rn733rm6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-edit-robot-flat"} {...others} />);
}

export default Component;
