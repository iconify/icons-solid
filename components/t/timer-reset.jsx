import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgcgog8-w.css';
import '../../css/k/ke8zw38lp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vgcgog8-w"/><path class="ke8zw38lp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:timer-reset"} {...others} />);
}

export default Component;
