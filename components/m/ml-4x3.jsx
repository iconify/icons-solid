import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fjgx-mnpn.css';
import '../../css/g/g9tmtd73z.css';
import '../../css/d/do593ubou.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="fjgx-mnpn"/><path class="g9tmtd73z"/><path class="do593ubou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ml-4x3"} {...others} />);
}

export default Component;
