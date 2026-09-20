import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mn7ogpftb.css';
import '../../css/g/gfviasbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mn7ogpftb"/><path class="gfviasbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-circle-code"} {...others} />);
}

export default Component;
