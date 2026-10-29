import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/njyp7yb0n.css';
import '../../css/w/wyzy68f_y.css';
import '../../css/m/mz_--eb0w.css';
import '../../css/h/h2-bjzlmt.css';
import '../../css/l/l8anq9i8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="njyp7yb0n"/><path class="wm-k wyzy68f_y"/><path class="mz_--eb0w wm-a"/><path class="h2-bjzlmt wm-k"/><path class="l8anq9i8q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chopsticks-sketch"} {...others} />);
}

export default Component;
