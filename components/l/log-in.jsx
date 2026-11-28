import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ahhc2jbks.css';
import '../../css/r/rw0tps2ji.css';
import '../../css/f/fs4i84bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ahhc2jbks"/><path class="rw0tps2ji"/><path class="fs4i84bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:log-in"} {...others} />);
}

export default Component;
