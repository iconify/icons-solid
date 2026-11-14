import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5-volb5j.css';
import '../../css/t/t97e-2uax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s5-volb5j"/><path class="t97e-2uax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:robotic"} {...others} />);
}

export default Component;
