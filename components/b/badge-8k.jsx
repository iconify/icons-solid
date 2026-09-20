import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p83csmnyx.css';
import '../../css/x/x-pvqobfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p83csmnyx"/><path class="x-pvqobfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:badge-8k"} {...others} />);
}

export default Component;
