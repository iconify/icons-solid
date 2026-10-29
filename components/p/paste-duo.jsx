import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hybqmlbrz.css';
import '../../css/e/ef7iipb0p.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/t/t1hkudb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hybqmlbrz"/><path class="ef7iipb0p"/><path class="wm-a wp31-1bdq"/><path class="t1hkudb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paste-duo"} {...others} />);
}

export default Component;
