import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sdf38muvh.css';
import '../../css/f/fet2cqbea.css';
import '../../css/g/g63vy454t.css';
import '../../css/t/tubrnps1o.css';
import '../../css/f/fd_m9bqpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sdf38muvh wm-k"/><path class="fet2cqbea wm-k"/><path class="g63vy454t wm-k"/><path class="tubrnps1o wm-s"/><path class="fd_m9bqpc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hotel-sketch"} {...others} />);
}

export default Component;
