import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgdc7hbhx.css';
import '../../css/i/ik-9ob1vk.css';
import '../../css/f/ffeeo3bqd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bgdc7hbhx"/><path class="ik-9ob1vk"/><path clip-rule="evenodd" class="ffeeo3bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mouse-flat"} {...others} />);
}

export default Component;
