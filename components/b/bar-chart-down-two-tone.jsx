import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-8wz9b1s.css';
import '../../css/m/ml9xssolm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j-8wz9b1s"/><path class="ml9xssolm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-down-two-tone"} {...others} />);
}

export default Component;
