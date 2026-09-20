import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9hoyynpq.css';
import '../../css/n/nkg7s7ybl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f9hoyynpq"/><path class="nkg7s7ybl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-duotone"} {...others} />);
}

export default Component;
