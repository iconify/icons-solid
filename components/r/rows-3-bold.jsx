import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqd2xacpf.css';
import '../../css/q/qxzywebjk.css';
import '../../css/w/wazzm0b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wqd2xacpf"/><path class="qxzywebjk"/><path class="wazzm0b2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-3-bold"} {...others} />);
}

export default Component;
