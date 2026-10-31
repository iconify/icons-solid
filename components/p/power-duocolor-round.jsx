import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9jp_22em.css';
import '../../css/n/n2qjb3bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i9jp_22em"/><path class="n2qjb3bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:power-duocolor-round"} {...others} />);
}

export default Component;
