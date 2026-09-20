import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4m_wubhn.css';
import '../../css/m/mdl65tfqc.css';
import '../../css/z/zaqqq7anp.css';
import '../../css/w/we2hzablk.css';
import '../../css/d/d2emwfb-d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t4m_wubhn"/><path class="mdl65tfqc"/><path class="zaqqq7anp"/><path class="we2hzablk"/><path class="d2emwfb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:speaker-1"} {...others} />);
}

export default Component;
