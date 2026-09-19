import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8cgi3g_w.css';
import '../../css/y/ywllszb7o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="k8cgi3g_w"/><path class="ywllszb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:thumb-down"} {...others} />);
}

export default Component;
