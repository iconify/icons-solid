import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t0e5e1bzb.css';
import '../../css/k/k3vkrebco.css';
import '../../css/y/y5d_3bbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t0e5e1bzb"/><path class="k3vkrebco"/><path class="y5d_3bbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-11"} {...others} />);
}

export default Component;
