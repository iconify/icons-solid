import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slucgwbym.css';
import '../../css/v/vld0sn98e.css';
import '../../css/i/iuk-_6mjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(105 12 10.83)" class="slucgwbym"/><path class="vld0sn98e"/><path class="iuk-_6mjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lasso"} {...others} />);
}

export default Component;
