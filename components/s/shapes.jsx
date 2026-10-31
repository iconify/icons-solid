import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hmqnl6bbt.css';
import '../../css/l/lu1903boh.css';
import '../../css/n/nxrwimq_i.css';
import '../../css/k/k29p0cc0p.css';
import '../../css/t/tqlmfubzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hmqnl6bbt wm-shadow"/><path class="lu1903boh"/><path class="nxrwimq_i"/><path class="k29p0cc0p"/><path class="tqlmfubzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shapes"} {...others} />);
}

export default Component;
