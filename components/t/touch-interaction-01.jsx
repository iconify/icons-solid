import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ml0tjzrxc.css';
import '../../css/v/v_b54o0uv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ml0tjzrxc"/><path class="v_b54o0uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-interaction-01"} {...others} />);
}

export default Component;
