import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pra4pt0re.css';
import '../../css/e/exf_bbbgv.css';
import '../../css/w/w3r45wbbs.css';
import '../../css/e/e88n4oijh.css';
import '../../css/f/f-k5oeq-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pra4pt0re"/><path class="exf_bbbgv wm-s"/><path class="w3r45wbbs wm-s"/><path class="e88n4oijh"/><path class="f-k5oeq-j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-smartphone-duo"} {...others} />);
}

export default Component;
