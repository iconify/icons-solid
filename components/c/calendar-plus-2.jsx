import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml6gccbzj.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/i/itxrtvb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ml6gccbzj"/><rect class="jhxi-trnl"/><path class="itxrtvb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-plus-2"} {...others} />);
}

export default Component;
