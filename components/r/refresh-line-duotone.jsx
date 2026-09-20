import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m84t_4viq.css';
import '../../css/p/p4-x7940g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m84t_4viq"/><path class="p4-x7940g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-line-duotone"} {...others} />);
}

export default Component;
