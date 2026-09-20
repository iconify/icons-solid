import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cy44qgphq.css';
import '../../css/n/nsj4trb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cy44qgphq"/><path class="nsj4trb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-sun-duotone"} {...others} />);
}

export default Component;
