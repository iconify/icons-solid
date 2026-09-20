import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w1xvjqqre.css';
import '../../css/u/uoq1y5w9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w1xvjqqre"/><path class="uoq1y5w9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:timer-reset-duotone"} {...others} />);
}

export default Component;
