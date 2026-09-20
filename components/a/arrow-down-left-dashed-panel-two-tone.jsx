import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/es1ry8oas.css';
import '../../css/g/gp0bdx8ih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="es1ry8oas"/><path class="gp0bdx8ih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-left-dashed-panel-two-tone"} {...others} />);
}

export default Component;
