import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f19ei9bez.css';
import '../../css/w/wfupqcc6c.css';
import '../../css/j/jd-9hyvzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f19ei9bez"/><path class="wfupqcc6c wm-a"/><path class="jd-9hyvzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stroller"} {...others} />);
}

export default Component;
