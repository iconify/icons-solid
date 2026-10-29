import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g7kvze86q.css';
import '../../css/t/tyl_u5bcc.css';
import '../../css/i/i7qv3i8gc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g7kvze86q"/><path class="tyl_u5bcc wm-a"/><path class="i7qv3i8gc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:popcorn"} {...others} />);
}

export default Component;
