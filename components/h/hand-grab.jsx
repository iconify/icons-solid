import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cp75ukgus.css';
import '../../css/j/j_nt2pbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cp75ukgus"/><path class="j_nt2pbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-grab"} {...others} />);
}

export default Component;
