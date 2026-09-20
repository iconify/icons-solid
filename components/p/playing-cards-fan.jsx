import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/paji3xblq.css';
import '../../css/m/mhf9z2iej.css';
import '../../css/x/xti1obcts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="paji3xblq"/><path class="mhf9z2iej"/><path class="xti1obcts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:playing-cards-fan"} {...others} />);
}

export default Component;
