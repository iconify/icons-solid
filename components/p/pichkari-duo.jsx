import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/od9f96bil.css';
import '../../css/j/jyql6cckb.css';
import '../../css/w/we4z7ebtz.css';
import '../../css/q/qijubub1d.css';
import '../../css/n/ni02kfb9h.css';
import '../../css/g/g2sik5moa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="od9f96bil"/><path class="jyql6cckb"/><path class="we4z7ebtz wm-s"/><path class="qijubub1d"/><path class="ni02kfb9h"/><path class="g2sik5moa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pichkari-duo"} {...others} />);
}

export default Component;
