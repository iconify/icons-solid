import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lu9u9u8wt.css';
import '../../css/q/qf7tbcbyb.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lu9u9u8wt"/><path class="qf7tbcbyb"/><path class="ju8v6k8zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:triangle-alert-sharp"} {...others} />);
}

export default Component;
