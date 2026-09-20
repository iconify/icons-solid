import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9rdt7b0r.css';
import '../../css/m/m0zx0yoie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z9rdt7b0r"/><path class="m0zx0yoie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-arrow-down"} {...others} />);
}

export default Component;
