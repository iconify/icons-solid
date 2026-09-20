import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/im1-27jtp.css';
import '../../css/j/j14j34bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="im1-27jtp"/><path class="j14j34bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:glass-off"} {...others} />);
}

export default Component;
