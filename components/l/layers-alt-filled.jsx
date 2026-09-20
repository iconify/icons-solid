import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3m5n3c2p.css';
import '../../css/p/pqyg4ok7s.css';
import '../../css/z/z-7pz9x4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k3m5n3c2p"/><path class="pqyg4ok7s"/><path class="z-7pz9x4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layers-alt-filled"} {...others} />);
}

export default Component;
