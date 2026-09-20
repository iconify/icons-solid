import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/am_ozbj2p.css';
import '../../css/m/m480t7bik.css';
import '../../css/q/qty78om7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="am_ozbj2p"/><rect class="m480t7bik"/><rect class="qty78om7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:group"} {...others} />);
}

export default Component;
