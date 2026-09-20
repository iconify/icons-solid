import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dw02l9-ww.css';
import '../../css/m/m4cfm1bym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dw02l9-ww"/><path class="m4cfm1bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:broom-duotone"} {...others} />);
}

export default Component;
