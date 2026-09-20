import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t1tvwhbhe.css';
import '../../css/q/qru4p6brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t1tvwhbhe"/><path class="qru4p6brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-down-broken"} {...others} />);
}

export default Component;
