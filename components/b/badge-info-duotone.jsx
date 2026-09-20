import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/i/ianaz7b0e.css';
import '../../css/f/ff45hndep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="ianaz7b0e"/><path class="ff45hndep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-info-duotone"} {...others} />);
}

export default Component;
