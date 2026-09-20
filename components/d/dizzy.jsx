import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8o025bvy.css';
import '../../css/x/xmbv1lser.css';
import '../../css/q/qc4q2o3mb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/v3wlrwo_l.css';
import '../../css/o/oz7n92_8r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8o025bvy"/><path class="xmbv1lser"/><path class="qc4q2o3mb"/><g class="ij2x_72vy"><path class="v3wlrwo_l"/><path class="oz7n92_8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dizzy"} {...others} />);
}

export default Component;
