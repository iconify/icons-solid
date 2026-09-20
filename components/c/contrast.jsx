import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/y/y0pjkbb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="y0pjkbb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:contrast"} {...others} />);
}

export default Component;
