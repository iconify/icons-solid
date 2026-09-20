import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4zev7d4r.css';
import '../../css/j/j7l35go9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b4zev7d4r"/><path clip-rule="evenodd" class="j7l35go9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:toggle-on-duotone"} {...others} />);
}

export default Component;
