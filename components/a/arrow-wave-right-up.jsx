import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amhlmpbjr.css';
import '../../css/y/yn8y2db9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="amhlmpbjr"/><path class="yn8y2db9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-wave-right-up"} {...others} />);
}

export default Component;
