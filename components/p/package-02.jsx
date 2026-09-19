import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k88fqcc0d.css';
import '../../css/z/zdctrwbkt.css';
import '../../css/g/gs0ndt-8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k88fqcc0d"/><path class="zdctrwbkt"/><path class="gs0ndt-8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-02"} {...others} />);
}

export default Component;
