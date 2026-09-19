import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ki_sjffgz.css';
import '../../css/d/dylmm_b7q.css';
import '../../css/b/bpfx7ob2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ki_sjffgz"/><circle class="dylmm_b7q"/><path class="bpfx7ob2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:route-off"} {...others} />);
}

export default Component;
