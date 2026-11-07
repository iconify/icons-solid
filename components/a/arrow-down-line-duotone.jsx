import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sijy5cc4z.css';
import '../../css/g/gp0t1_y6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sijy5cc4z"/><path class="gp0t1_y6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-line-duotone"} {...others} />);
}

export default Component;
