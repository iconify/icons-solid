import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yc932bcab.css';
import '../../css/s/se9tejz-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yc932bcab"/><path class="se9tejz-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-horizontal-duotone"} {...others} />);
}

export default Component;
