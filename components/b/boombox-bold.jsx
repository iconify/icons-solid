import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s_61f0g-l.css';
import '../../css/f/fxu3lsbwq.css';
import '../../css/s/sbh5qwbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s_61f0g-l"/><path class="fxu3lsbwq"/><path clip-rule="evenodd" class="sbh5qwbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:boombox-bold"} {...others} />);
}

export default Component;
