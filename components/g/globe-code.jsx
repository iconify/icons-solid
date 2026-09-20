import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mq-xxibrt.css';
import '../../css/m/mcmvkhg3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mq-xxibrt"/><path class="mcmvkhg3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-code"} {...others} />);
}

export default Component;
