import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fdgojzbxm.css';
import '../../css/t/t4ug6db2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fdgojzbxm"/><path class="t4ug6db2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-minus-duotone"} {...others} />);
}

export default Component;
