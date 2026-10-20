import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z4r48dbgx.css';
import '../../css/o/oi6d-5_ph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z4r48dbgx"/><circle class="oi6d-5_ph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:avocado"} {...others} />);
}

export default Component;
