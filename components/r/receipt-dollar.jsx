import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_6xkebub.css';
import '../../css/j/jwqjkwblo.css';
import '../../css/q/q_39cac5q.css';
import '../../css/o/oos9ecbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a_6xkebub"/><path class="jwqjkwblo"/><path class="q_39cac5q"/><path class="oos9ecbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:receipt-dollar"} {...others} />);
}

export default Component;
