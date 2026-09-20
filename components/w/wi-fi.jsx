import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fksazibln.css';
import '../../css/q/qe-q-eb0q.css';
import '../../css/e/e87rnnu0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fksazibln"/><path class="qe-q-eb0q"/><circle class="e87rnnu0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:wi-fi"} {...others} />);
}

export default Component;
