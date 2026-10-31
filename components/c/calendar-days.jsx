import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/z/zk-87qbyg.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/e/e0pjxabbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="zk-87qbyg"/><path class="ghfhivbgc"/><path class="e0pjxabbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:calendar-days"} {...others} />);
}

export default Component;
