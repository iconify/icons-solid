import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/a/a1x296bat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wxwl6_qzl"/><path class="a1x296bat wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-heart"} {...others} />);
}

export default Component;
