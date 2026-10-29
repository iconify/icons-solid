import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6qls9a2m.css';
import '../../css/v/vf27h3ogo.css';
import '../../css/s/s08vmhm9f.css';
import '../../css/t/t7n-iqbfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e6qls9a2m wm-k"/><path class="vf27h3ogo wm-k"/><path class="s08vmhm9f wm-k"/><path class="t7n-iqbfq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:pilcrow"} {...others} />);
}

export default Component;
