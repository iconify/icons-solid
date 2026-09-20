import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gt8pg8bwu.css';
import '../../css/n/nuqj8qcru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gt8pg8bwu"/><path class="nuqj8qcru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bell-ringing-2"} {...others} />);
}

export default Component;
