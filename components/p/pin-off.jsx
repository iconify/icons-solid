import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h166qubho.css';
import '../../css/n/nzp8gfnpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h166qubho"/><path class="nzp8gfnpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:pin-off"} {...others} />);
}

export default Component;
