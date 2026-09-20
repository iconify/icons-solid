import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px-v8fp6s.css';
import '../../css/l/l_ox2fgog.css';
import '../../css/x/xs3lbmb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="px-v8fp6s"/><path class="l_ox2fgog"/><path class="xs3lbmb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bolt-bold"} {...others} />);
}

export default Component;
