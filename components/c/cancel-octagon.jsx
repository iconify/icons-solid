import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kr__f9beo.css';
import '../../css/t/t3pi35bue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kr__f9beo"/><path class="t3pi35bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cancel-octagon"} {...others} />);
}

export default Component;
