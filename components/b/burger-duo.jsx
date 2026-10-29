import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m6triwbzc.css';
import '../../css/w/w4f1phn-n.css';
import '../../css/j/jf-6btauh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m6triwbzc"/><path class="w4f1phn-n wm-a"/><path class="jf-6btauh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:burger-duo"} {...others} />);
}

export default Component;
