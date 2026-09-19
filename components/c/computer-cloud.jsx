import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/srxhvabsx.css';
import '../../css/z/zq2r4k_hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="srxhvabsx"/><path class="zq2r4k_hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-cloud"} {...others} />);
}

export default Component;
