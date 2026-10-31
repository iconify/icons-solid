import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aguilgmnz.css';
import '../../css/q/qc4ukd41w.css';
import '../../css/y/ytth9f11g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aguilgmnz wm-k"/><path class="qc4ukd41w wm-shine"/><path class="wm-shine ytth9f11g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:receipt"} {...others} />);
}

export default Component;
