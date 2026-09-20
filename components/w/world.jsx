import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jo_9i8bjx.css';
import '../../css/q/q4nmlwbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jo_9i8bjx"/><path class="q4nmlwbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world"} {...others} />);
}

export default Component;
