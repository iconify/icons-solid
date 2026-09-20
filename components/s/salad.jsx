import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyomvzbia.css';
import '../../css/t/ta28-_i6j.css';
import '../../css/p/pkz-2empp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fyomvzbia"/><path class="ta28-_i6j"/><path class="pkz-2empp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:salad"} {...others} />);
}

export default Component;
