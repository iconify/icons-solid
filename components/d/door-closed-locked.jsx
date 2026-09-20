import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t1s09x23s.css';
import '../../css/e/ewe-8cyie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t1s09x23s"/><rect class="ewe-8cyie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:door-closed-locked"} {...others} />);
}

export default Component;
