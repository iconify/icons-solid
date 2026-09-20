import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yn_mmjfoz.css';
import '../../css/e/e3hxygbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yn_mmjfoz"/><path class="e3hxygbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-nintendo"} {...others} />);
}

export default Component;
