import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z_2i7jbvo.css';
import '../../css/a/aaakgqotp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z_2i7jbvo"/><circle class="aaakgqotp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-search"} {...others} />);
}

export default Component;
