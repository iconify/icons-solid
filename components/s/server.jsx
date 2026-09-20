import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/las96bcjw.css';
import '../../css/v/vz7_ibceo.css';
import '../../css/g/g2ncvrepr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="las96bcjw"/><rect class="vz7_ibceo"/><path class="g2ncvrepr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:server"} {...others} />);
}

export default Component;
