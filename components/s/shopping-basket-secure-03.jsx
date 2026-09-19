import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m_vbslior.css';
import '../../css/v/vt0bpzb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m_vbslior"/><path class="vt0bpzb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-secure-03"} {...others} />);
}

export default Component;
