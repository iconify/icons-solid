import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/x/x9zsvvbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="dbgvcxwad"/><path class="x9zsvvbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:checkmark-circle"} {...others} />);
}

export default Component;
