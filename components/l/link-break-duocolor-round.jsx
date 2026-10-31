import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gami8bcan.css';
import '../../css/w/w00z3jbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gami8bcan"/><path class="w00z3jbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-break-duocolor-round"} {...others} />);
}

export default Component;
