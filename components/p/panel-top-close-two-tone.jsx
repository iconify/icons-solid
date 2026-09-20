import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwaj0vjwi.css';
import '../../css/u/u1hsjhbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="u1hsjhbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-top-close-two-tone"} {...others} />);
}

export default Component;
