import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gzoteshru.css';
import '../../css/f/fyq-yv0yz.css';
import '../../css/s/s37zulbpr.css';
import '../../css/z/zpodnwj0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gzoteshru"/><path class="fyq-yv0yz wm-a"/><path class="s37zulbpr wm-a"/><path class="zpodnwj0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bed-duo"} {...others} />);
}

export default Component;
