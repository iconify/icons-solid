import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/knwxm9b4l.css';
import '../../css/q/q9v5542hs.css';
import '../../css/x/xoonxzq-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="knwxm9b4l"/><path clip-rule="evenodd" class="q9v5542hs"/><path class="xoonxzq-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-lock-alt-solid"} {...others} />);
}

export default Component;
