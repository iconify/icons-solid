import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vhw4z0p1s.css';
import '../../css/h/hw_cz1bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vhw4z0p1s"/><path class="hw_cz1bmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:lamp-wall-up"} {...others} />);
}

export default Component;
