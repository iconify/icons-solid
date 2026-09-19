import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ore586bka.css';
import '../../css/n/nqsj0rbim.css';
import '../../css/s/ssg4jed4q.css';
import '../../css/a/ao9n_xpfy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ore586bka"/><path class="nqsj0rbim"/><path clip-rule="evenodd" class="ssg4jed4q"/><path class="ao9n_xpfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:brightness"} {...others} />);
}

export default Component;
