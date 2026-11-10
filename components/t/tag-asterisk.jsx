import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmvp54drn.css';
import '../../css/t/t9r7g6nbq.css';
import '../../css/p/p8kaolb4p.css';
import '../../css/t/tbg6xx1_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hmvp54drn"/><path class="t9r7g6nbq"/><path class="p8kaolb4p"/><path class="tbg6xx1_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tag-asterisk"} {...others} />);
}

export default Component;
