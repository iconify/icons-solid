import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cdbobfbnn.css';
import '../../css/r/rw56-0bah.css';
import '../../css/u/unxbqqbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cdbobfbnn"/><path class="rw56-0bah"/><path class="unxbqqbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:eye-off"} {...others} />);
}

export default Component;
