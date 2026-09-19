import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qh8mg-b3r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="qh8mg-b3r"/><polyline points="5.75 7.75 7.25 9.25 10.25 5.75"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:shield-tick"} {...others} />);
}

export default Component;
