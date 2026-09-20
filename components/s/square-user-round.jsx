import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8s1htbdm.css';
import '../../css/r/rus9pebka.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v8s1htbdm"/><circle class="rus9pebka"/><rect class="jhxi-trnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-user-round"} {...others} />);
}

export default Component;
