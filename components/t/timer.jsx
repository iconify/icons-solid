import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/temg2yb-s.css';
import '../../css/n/n8yy-0bxa.css';
import '../../css/h/hmrca1hzs.css';
import '../../css/s/sx0vpzc7d.css';
import '../../css/o/owdcv17fj.css';
import '../../css/h/hyyhoebhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="temg2yb-s wm-shadow"/><path class="n8yy-0bxa"/><path class="hmrca1hzs"/><path class="sx0vpzc7d"/><path class="owdcv17fj"/><path class="hyyhoebhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:timer"} {...others} />);
}

export default Component;
