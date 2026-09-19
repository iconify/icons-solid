import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xb4g0c2rn.css';
import '../../css/v/vbvsif9de.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xb4g0c2rn"/><path class="vbvsif9de"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-sheets"} {...others} />);
}

export default Component;
