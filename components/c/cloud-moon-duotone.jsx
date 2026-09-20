import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cy44qgphq.css';
import '../../css/b/bv-7_5t-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cy44qgphq"/><path class="bv-7_5t-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-moon-duotone"} {...others} />);
}

export default Component;
