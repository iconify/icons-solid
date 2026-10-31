import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e-l6e3bbk.css';
import '../../css/s/s9ziy4b6m.css';
import '../../css/h/hyy516fqs.css';
import '../../css/u/up6muwb6o.css';
import '../../css/l/l6z8-8ban.css';
import '../../css/w/w5yp2j-6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e-l6e3bbk wm-shadow"/><path class="s9ziy4b6m"/><path class="hyy516fqs"/><path class="up6muwb6o"/><path class="l6z8-8ban"/><path class="w5yp2j-6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:nutcracker"} {...others} />);
}

export default Component;
