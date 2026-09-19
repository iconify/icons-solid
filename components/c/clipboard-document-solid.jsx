import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3ezo_bpd.css';
import '../../css/q/qs7d5jb9u.css';
import '../../css/m/mn_9mqnpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w3ezo_bpd"/><path class="qs7d5jb9u"/><path class="mn_9mqnpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:clipboard-document-solid"} {...others} />);
}

export default Component;
