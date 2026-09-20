import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/ton5smgkd.css';
import '../../css/o/oi0lvgb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ton5smgkd"/><path class="oi0lvgb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-line-duotone"} {...others} />);
}

export default Component;
