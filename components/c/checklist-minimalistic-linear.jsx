import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/w/w2dqczb0r.css';
import '../../css/z/zs9521pzc.css';
import '../../css/e/er-qpx8gd.css';
import '../../css/l/lffdqhb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="w2dqczb0r"/><path class="zs9521pzc"/><path class="er-qpx8gd"/><path class="lffdqhb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:checklist-minimalistic-linear"} {...others} />);
}

export default Component;
