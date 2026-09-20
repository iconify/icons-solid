import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/d/d1ue3bczq.css';
import '../../css/k/ksw3aymwa.css';
import '../../css/e/e9h1t6b7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="d1ue3bczq"/><path class="ksw3aymwa"/><path class="e9h1t6b7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lamp-line-duotone"} {...others} />);
}

export default Component;
