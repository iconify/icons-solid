import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy94go95p.css';
import '../../css/s/s0-z2wmow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wy94go95p"/><path class="s0-z2wmow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-check-two-tone"} {...others} />);
}

export default Component;
