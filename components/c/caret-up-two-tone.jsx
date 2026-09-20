import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mshpjx5hv.css';
import '../../css/c/ch15pybdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mshpjx5hv"/><path class="ch15pybdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-up-two-tone"} {...others} />);
}

export default Component;
