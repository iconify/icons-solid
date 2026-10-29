import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hew4q4b0u.css';
import '../../css/c/ck_6qidwg.css';
import '../../css/g/gfb62bt5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hew4q4b0u"/><path class="ck_6qidwg wm-a"/><path class="gfb62bt5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contact-duo"} {...others} />);
}

export default Component;
