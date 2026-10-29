import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucwdobn7c.css';
import '../../css/j/j9e-pqbtc.css';
import '../../css/e/e2ljddclu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ucwdobn7c wm-k"/><path class="j9e-pqbtc wm-k"/><path class="e2ljddclu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:infinity"} {...others} />);
}

export default Component;
