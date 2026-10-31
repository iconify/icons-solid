import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g03sssbsy.css';
import '../../css/i/i3xzrim4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g03sssbsy"/><path class="i3xzrim4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:indent-duocolor-round"} {...others} />);
}

export default Component;
