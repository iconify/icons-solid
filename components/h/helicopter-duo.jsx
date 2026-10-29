import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q91r-dbee.css';
import '../../css/n/nf7gtbc4r.css';
import '../../css/b/bt7scxyyw.css';
import '../../css/x/x0eemkkvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q91r-dbee"/><path class="nf7gtbc4r wm-a"/><path class="bt7scxyyw"/><path class="wm-a x0eemkkvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:helicopter-duo"} {...others} />);
}

export default Component;
