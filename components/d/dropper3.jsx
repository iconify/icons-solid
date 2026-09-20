import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgl1wz4_k.css';
import '../../css/t/tsh0j704h.css';
import '../../css/j/j5o3tkw7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bgl1wz4_k"/><path class="tsh0j704h"/><path clip-rule="evenodd" class="j5o3tkw7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dropper3"} {...others} />);
}

export default Component;
