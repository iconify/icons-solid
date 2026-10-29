import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l6ij0fb_t.css';
import '../../css/o/o-3onsb9p.css';
import '../../css/r/r-mc9nbft.css';
import '../../css/b/bqfcqsczd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l6ij0fb_t wm-k"/><path class="o-3onsb9p"/><path class="r-mc9nbft"/><path class="bqfcqsczd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:database-backup"} {...others} />);
}

export default Component;
