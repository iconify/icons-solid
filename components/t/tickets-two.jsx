import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imqechvyp.css';
import '../../css/f/f-m6wkhvt.css';
import '../../css/i/i3f2j6b_u.css';
import '../../css/e/evvy2i13i.css';
import '../../css/p/povs420wf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="imqechvyp"/><path class="f-m6wkhvt"/><circle class="i3f2j6b_u"/><circle class="evvy2i13i"/><circle class="povs420wf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tickets-two"} {...others} />);
}

export default Component;
