import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e7qr6bb7e.css';
import '../../css/i/iz-x60ucx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e7qr6bb7e"/><path class="iz-x60ucx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:parasol-two-tone"} {...others} />);
}

export default Component;
