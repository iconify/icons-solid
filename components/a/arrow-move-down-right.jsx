import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmw-dsbhg.css';
import '../../css/c/c_wb7v9xi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qmw-dsbhg"/><path class="c_wb7v9xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-move-down-right"} {...others} />);
}

export default Component;
