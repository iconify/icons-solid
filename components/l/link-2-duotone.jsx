import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hivju0bye.css';
import '../../css/d/dygl0op_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hivju0bye"/><path class="dygl0op_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:link-2-duotone"} {...others} />);
}

export default Component;
