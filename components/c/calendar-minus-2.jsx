import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml6gccbzj.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/g/g-31etbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ml6gccbzj"/><rect class="jhxi-trnl"/><path class="g-31etbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-minus-2"} {...others} />);
}

export default Component;
