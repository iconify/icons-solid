import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vr982qbdx.css';
import '../../css/z/zso2mq8uq.css';
import '../../css/v/v7-gd_czh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vr982qbdx"/><path clip-rule="evenodd" class="zso2mq8uq"/><path class="v7-gd_czh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:face-neutral-outline-24px"} {...others} />);
}

export default Component;
