import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1c-mrbex.css';
import '../../css/i/iv8ywkbqx.css';
import '../../css/t/tmindebzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n1c-mrbex"/><path class="iv8ywkbqx"/><path clip-rule="evenodd" class="tmindebzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-lock-bold"} {...others} />);
}

export default Component;
