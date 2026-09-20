import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgcpvddei.css';
import '../../css/c/cd9mygv6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rgcpvddei"/><path class="cd9mygv6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-dollar"} {...others} />);
}

export default Component;
