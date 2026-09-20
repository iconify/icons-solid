import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utcj7eb_s.css';
import '../../css/e/ejplk2-9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utcj7eb_s"/><path class="ejplk2-9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:laptop-duotone"} {...others} />);
}

export default Component;
