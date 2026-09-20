import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fe4pabiai.css';
import '../../css/v/vk4v4b4uw.css';
import '../../css/q/qjum4lbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fe4pabiai"/><path class="vk4v4b4uw"/><path class="qjum4lbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:keyboard-two-tone"} {...others} />);
}

export default Component;
