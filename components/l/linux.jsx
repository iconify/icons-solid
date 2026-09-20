import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilbc9tc8n.css';
import '../../css/u/uusfhccwf.css';
import '../../css/r/r4a85nb6r.css';
import '../../css/h/hfqd4dtjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ilbc9tc8n"/><rect class="uusfhccwf"/><path class="r4a85nb6r"/><path class="hfqd4dtjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:linux"} {...others} />);
}

export default Component;
