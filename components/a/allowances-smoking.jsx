import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jssa96bzq.css';
import '../../css/m/myz31-4ed.css';
import '../../css/x/xpblcvb4q.css';
import '../../css/x/xynkp0bnd.css';
import '../../css/d/dwo4d5bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jssa96bzq"/><path class="myz31-4ed"/><path class="xpblcvb4q"/><path class="xynkp0bnd"/><path class="dwo4d5bgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:allowances-smoking"} {...others} />);
}

export default Component;
