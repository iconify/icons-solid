import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qh8mg-b3r.css';
import '../../css/u/uj4pejqja.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="qh8mg-b3r"/><path class="uj4pejqja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:shield-warning"} {...others} />);
}

export default Component;
