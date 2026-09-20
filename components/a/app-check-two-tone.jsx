import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r63fawbfm.css';
import '../../css/f/fu-6iccwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r63fawbfm"/><path class="fu-6iccwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:app-check-two-tone"} {...others} />);
}

export default Component;
