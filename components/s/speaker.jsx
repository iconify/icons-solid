import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ysbubg1kd.css';
import '../../css/t/t80vk__1t.css';
import '../../css/j/jboqyrtbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ysbubg1kd"/><path class="t80vk__1t"/><path class="jboqyrtbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:speaker"} {...others} />);
}

export default Component;
