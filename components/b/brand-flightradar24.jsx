import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/o/o1z2wccdo.css';
import '../../css/j/jc0mmvb4z.css';
import '../../css/l/ld24yvbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="o1z2wccdo"/><path class="jc0mmvb4z"/><path class="ld24yvbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-flightradar24"} {...others} />);
}

export default Component;
