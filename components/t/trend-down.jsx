import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m90soxk8s.css';
import '../../css/w/wclbhx8-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m90soxk8s"/><path class="wclbhx8-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trend-down"} {...others} />);
}

export default Component;
