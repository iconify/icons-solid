import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/osz056cef.css';
import '../../css/c/ca5nkybln.css';
import '../../css/v/vdyejqy2c.css';
import '../../css/n/nmq5enqga.css';
import '../../css/e/ekfd3qbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="osz056cef"/><path class="ca5nkybln wm-a"/><path class="vdyejqy2c"/><path class="nmq5enqga wm-a"/><path class="ekfd3qbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sailboat-duo"} {...others} />);
}

export default Component;
