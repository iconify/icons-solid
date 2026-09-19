import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w0zb-hs6g.css';
import '../../css/k/k_gs59c5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w0zb-hs6g"/><path class="k_gs59c5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wellness"} {...others} />);
}

export default Component;
