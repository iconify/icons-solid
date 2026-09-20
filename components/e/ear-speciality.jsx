import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1fhmbcqd.css';
import '../../css/k/kem5pbbxd.css';
import '../../css/y/yl07m5ber.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b1fhmbcqd"/><path class="kem5pbbxd"/><path class="yl07m5ber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ear-speciality"} {...others} />);
}

export default Component;
