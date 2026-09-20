import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nk_9rob_x.css';
import '../../css/i/iv8rhe47p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nk_9rob_x"/><path class="iv8rhe47p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-users"} {...others} />);
}

export default Component;
