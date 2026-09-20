import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nofko2bnz.css';
import '../../css/n/n65i98mst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nofko2bnz"/><path class="n65i98mst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-bitcoin"} {...others} />);
}

export default Component;
