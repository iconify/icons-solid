import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lszba4b2p.css';
import '../../css/u/u8_q54bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lszba4b2p"/><path class="u8_q54bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:temperature-high"} {...others} />);
}

export default Component;
