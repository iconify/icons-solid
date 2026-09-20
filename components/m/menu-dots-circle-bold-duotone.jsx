import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/y/y-xxqpbcl.css';
import '../../css/o/o3omre-is.css';
import '../../css/g/g7m_9fb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="y-xxqpbcl"/><path class="o3omre-is"/><path class="g7m_9fb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-circle-bold-duotone"} {...others} />);
}

export default Component;
