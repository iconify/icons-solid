import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-9xk77xp.css';
import '../../css/k/k8ux7d5dm.css';
import '../../css/y/yocv29bmk.css';
import '../../css/o/oagt_16cc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-9xk77xp"/><path class="k8ux7d5dm"/><rect class="yocv29bmk"/><path class="oagt_16cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-star"} {...others} />);
}

export default Component;
