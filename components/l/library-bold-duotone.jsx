import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9392vb8r.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/te4tu1b2p.css';
import '../../css/b/bdje-z_9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w9392vb8r"/><g class="mc2zb0bvp"><path class="te4tu1b2p"/><path class="bdje-z_9r"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:library-bold-duotone"} {...others} />);
}

export default Component;
