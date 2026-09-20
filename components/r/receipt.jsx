import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu2huubnl.css';
import '../../css/k/kqfhl858c.css';
import '../../css/f/fmpis1pkr.css';
import '../../css/e/edo8e-btp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qu2huubnl"/><path class="kqfhl858c"/><path class="fmpis1pkr"/><path class="edo8e-btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:receipt"} {...others} />);
}

export default Component;
