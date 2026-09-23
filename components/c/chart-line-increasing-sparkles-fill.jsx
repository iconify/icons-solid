import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/enxjzbbbm.css';
import '../../css/y/yhx9o1s9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="enxjzbbbm"/><path class="yhx9o1s9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-line-increasing-sparkles-fill"} {...others} />);
}

export default Component;
