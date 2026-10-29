import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wm7z0fbzo.css';
import '../../css/o/o53n0ib2h.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i-7a-zb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wm7z0fbzo"/><path class="o53n0ib2h wm-a"/><path class="y95393_dl"/><path class="i-7a-zb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-duo"} {...others} />);
}

export default Component;
