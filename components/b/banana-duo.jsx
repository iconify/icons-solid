import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hol610bkj.css';
import '../../css/v/vxyac5iur.css';
import '../../css/o/ow5u1cc8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hol610bkj"/><path class="vxyac5iur wm-a"/><path class="ow5u1cc8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:banana-duo"} {...others} />);
}

export default Component;
