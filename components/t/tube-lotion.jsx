import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/olasjbcef.css';
import '../../css/o/ogo1ktbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="olasjbcef"/><path class="ogo1ktbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tube-lotion"} {...others} />);
}

export default Component;
