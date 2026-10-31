import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sv2-ifb9o.css';
import '../../css/c/c_9qampbu.css';
import '../../css/l/lrbzgybpa.css';
import '../../css/v/v22g9sbjr.css';
import '../../css/d/dccbhi0dx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sv2-ifb9o wm-shadow"/><path class="c_9qampbu"/><path class="lrbzgybpa"/><path class="v22g9sbjr"/><path class="dccbhi0dx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:microwave"} {...others} />);
}

export default Component;
