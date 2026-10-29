import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dnnmvmbax.css';
import '../../css/j/jrcx8qb1e.css';
import '../../css/s/s8xb1n54b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dnnmvmbax"/><path class="jrcx8qb1e wm-k"/><path class="s8xb1n54b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-ghost-sketch"} {...others} />);
}

export default Component;
