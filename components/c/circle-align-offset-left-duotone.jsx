import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/khsyjib1h.css';
import '../../css/z/z4wevb0wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="khsyjib1h"/><path class="z4wevb0wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-align-offset-left-duotone"} {...others} />);
}

export default Component;
