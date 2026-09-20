import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcb6e5lgd.css';
import '../../css/v/vk8rno99b.css';
import '../../css/o/oyqkr867s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bcb6e5lgd"/><path clip-rule="evenodd" class="vk8rno99b"/><path class="oyqkr867s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-plus-fill"} {...others} />);
}

export default Component;
