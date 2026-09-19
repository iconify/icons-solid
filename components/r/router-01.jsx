import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hedu6uv9e.css';
import '../../css/l/l2a2w4bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hedu6uv9e"/><path class="l2a2w4bdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:router-01"} {...others} />);
}

export default Component;
