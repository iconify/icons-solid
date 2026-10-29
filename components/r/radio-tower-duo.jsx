import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gveujlbog.css';
import '../../css/i/iib4vtwgi.css';
import '../../css/b/b88gxzbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gveujlbog"/><path class="iib4vtwgi wm-a"/><path class="b88gxzbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radio-tower-duo"} {...others} />);
}

export default Component;
