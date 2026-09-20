import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k7jlomcpn.css';
import '../../css/t/t78f16meg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k7jlomcpn"/><path class="t78f16meg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:atom-off"} {...others} />);
}

export default Component;
