import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4hlqekzg.css';
import '../../css/o/o3xs61euo.css';
import '../../css/k/kcuzayj_q.css';
import '../../css/g/gmoqjm-2e.css';
import '../../css/p/piuomjbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l4hlqekzg"/><path class="o3xs61euo"/><path class="kcuzayj_q"/><path class="gmoqjm-2e"/><path class="piuomjbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tool-box"} {...others} />);
}

export default Component;
