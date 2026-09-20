import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knp318bux.css';
import '../../css/t/trwxrbbld.css';
import '../../css/n/ny_y9qmnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="knp318bux"/><path class="trwxrbbld"/><path class="ny_y9qmnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:outgoing-call-broken"} {...others} />);
}

export default Component;
