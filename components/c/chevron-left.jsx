import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2md8qh9v.css';
import '../../css/t/tna83ccep.css';
import '../../css/p/pmba489ow.css';
import '../../css/j/jj4qoyk8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r2md8qh9v wm-k"/><path class="tna83ccep wm-k"/><path class="pmba489ow wm-k"/><path class="jj4qoyk8g wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevron-left"} {...others} />);
}

export default Component;
