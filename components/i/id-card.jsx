import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q30p4-6kp.css';
import '../../css/e/e5kqksb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q30p4-6kp"/><path class="e5kqksb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:id-card"} {...others} />);
}

export default Component;
