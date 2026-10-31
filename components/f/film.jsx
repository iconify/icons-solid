import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/m/m6c1liw-r.css';
import '../../css/o/o1cvhcccz.css';
import '../../css/h/hqyhicczn.css';
import '../../css/r/rcusoqb8x.css';
import '../../css/n/nt7od5b8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="m6c1liw-r"/><path class="o1cvhcccz"/><path class="hqyhicczn"/><path class="rcusoqb8x"/><path class="nt7od5b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:film"} {...others} />);
}

export default Component;
