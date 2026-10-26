import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zma5a-b_v.css';
import '../../css/w/we11k29vy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="zma5a-b_v"/><path class="we11k29vy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:trash"} {...others} />);
}

export default Component;
