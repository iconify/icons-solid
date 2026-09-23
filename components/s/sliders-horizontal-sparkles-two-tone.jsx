import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fz23qj35d.css';
import '../../css/l/lxr-c948j.css';
import '../../css/h/ho34uhwef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fz23qj35d"/><path class="lxr-c948j"/><path class="ho34uhwef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-horizontal-sparkles-two-tone"} {...others} />);
}

export default Component;
