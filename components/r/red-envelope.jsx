import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/buxga7syi.css';
import '../../css/p/p19yvk-0i.css';
import '../../css/e/elf7rzb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="buxga7syi"/><path class="p19yvk-0i wm-a"/><path class="elf7rzb6q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:red-envelope"} {...others} />);
}

export default Component;
