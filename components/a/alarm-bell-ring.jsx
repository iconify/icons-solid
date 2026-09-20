import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il6qsobgl.css';
import '../../css/g/gr7uvfbzf.css';
import '../../css/e/ejcqtebwj.css';
import '../../css/x/xezwnd2as.css';
import '../../css/s/sluf72b8a.css';
import '../../css/l/l4fiuobzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="il6qsobgl"/><path class="gr7uvfbzf"/><path class="ejcqtebwj"/><path class="xezwnd2as"/><path class="sluf72b8a"/><path class="l4fiuobzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:alarm-bell-ring"} {...others} />);
}

export default Component;
