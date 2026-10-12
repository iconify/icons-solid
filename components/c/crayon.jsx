import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4d83uh3a.css';
import '../../css/o/olezgdc1i.css';
import '../../css/i/iuw39tbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(135 1.79 10.94)scale(-1 1)" class="k4d83uh3a"/><path class="olezgdc1i"/><path class="iuw39tbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:crayon"} {...others} />);
}

export default Component;
