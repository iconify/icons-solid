import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hjkp8vjuf.css';
import '../../css/v/vnq0g0eje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hjkp8vjuf"/><path class="vnq0g0eje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:check-circle"} {...others} />);
}

export default Component;
