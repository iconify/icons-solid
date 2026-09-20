import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqm17jbcd.css';
import '../../css/k/ku5_4yd7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pqm17jbcd"/><path class="ku5_4yd7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:face-smile-plus-two-tone"} {...others} />);
}

export default Component;
