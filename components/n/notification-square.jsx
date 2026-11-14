import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ouk6zs8cw.css';
import '../../css/u/u0_8wb5zi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ouk6zs8cw"/><path class="u0_8wb5zi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-square"} {...others} />);
}

export default Component;
