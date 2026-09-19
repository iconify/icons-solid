import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pt_vuyb1j.css';
import '../../css/p/py9xcv6ti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pt_vuyb1j"/><path class="py9xcv6ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chart-pie"} {...others} />);
}

export default Component;
