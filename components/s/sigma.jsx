import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3l73mbcf.css';
import '../../css/e/e6p789w9e.css';
import '../../css/x/xox69fb8a.css';
import '../../css/y/y_v_c0bmr.css';
import '../../css/k/kt9j-xb3b.css';
import '../../css/n/nx-6d3bma.css';
import '../../css/m/mil8t5ruj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j3l73mbcf wm-shadow"/><path class="e6p789w9e wm-k"/><path class="wm-k xox69fb8a"/><path class="wm-k y_v_c0bmr"/><path class="kt9j-xb3b wm-k"/><path class="nx-6d3bma wm-k"/><path class="mil8t5ruj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:sigma"} {...others} />);
}

export default Component;
