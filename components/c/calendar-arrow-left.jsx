import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-c_01ebu.css';
import '../../css/j/j-zy9pktq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p-c_01ebu"/><path class="j-zy9pktq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-arrow-left"} {...others} />);
}

export default Component;
