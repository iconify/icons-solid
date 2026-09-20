import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nd1jfrq2a.css';
import '../../css/o/oa5ga5b4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nd1jfrq2a"/><path class="oa5ga5b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:loader-duotone"} {...others} />);
}

export default Component;
