import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi78k2ips.css';
import '../../css/x/xy9-6wbyv.css';
import '../../css/p/pvjbuzbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vi78k2ips"/><path class="xy9-6wbyv"/><path class="pvjbuzbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:phone-silent"} {...others} />);
}

export default Component;
