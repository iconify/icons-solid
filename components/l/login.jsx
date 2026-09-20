import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_jr7bc3p.css';
import '../../css/l/ly10_m1nh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j_jr7bc3p"/><path class="ly10_m1nh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:login"} {...others} />);
}

export default Component;
