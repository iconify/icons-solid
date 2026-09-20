import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swg5p7vax.css';
import '../../css/m/m9587_b1g.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="swg5p7vax"/><path class="m9587_b1g"/><path class="sp3ujwwyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-duotone"} {...others} />);
}

export default Component;
