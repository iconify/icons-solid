import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu4bqfbiz.css';
import '../../css/q/qy1aa2baa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mu4bqfbiz"/><path class="qy1aa2baa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:packaging"} {...others} />);
}

export default Component;
