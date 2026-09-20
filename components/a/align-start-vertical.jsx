import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vhhww1-oi.css';
import '../../css/m/mc1zpf89q.css';
import '../../css/f/fwgmdib4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="vhhww1-oi"/><rect class="mc1zpf89q"/><path class="fwgmdib4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-start-vertical"} {...others} />);
}

export default Component;
