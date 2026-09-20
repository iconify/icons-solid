import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmvwktb5q.css';
import '../../css/j/juk05_rry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tmvwktb5q"/><path class="juk05_rry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:public-service-firefighter-truck-1"} {...others} />);
}

export default Component;
