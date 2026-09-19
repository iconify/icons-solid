import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/btdvolbxh.css';
import '../../css/h/h76cb7bbv.css';
import '../../css/k/k1p933vmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="btdvolbxh"/><path class="h76cb7bbv"/><path class="k1p933vmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-cloud-hailstone"} {...others} />);
}

export default Component;
