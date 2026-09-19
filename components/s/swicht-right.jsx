import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dtkvfbchi.css';
import '../../css/s/sk4fr6bxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dtkvfbchi"/><path class="sk4fr6bxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:swicht-right"} {...others} />);
}

export default Component;
