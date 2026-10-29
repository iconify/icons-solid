import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e6kqonb8o.css';
import '../../css/g/gc1jr4bji.css';
import '../../css/n/n9em5fasb.css';
import '../../css/o/oc_qcrgei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e6kqonb8o"/><path class="gc1jr4bji wm-a"/><path class="n9em5fasb"/><path class="oc_qcrgei wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:award-duo"} {...others} />);
}

export default Component;
