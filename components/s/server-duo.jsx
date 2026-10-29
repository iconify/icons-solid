import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bunq_pbyx.css';
import '../../css/k/ksdsltdkn.css';
import '../../css/g/g8ehjj7yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bunq_pbyx"/><path class="ksdsltdkn wm-a"/><path class="g8ehjj7yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-duo"} {...others} />);
}

export default Component;
