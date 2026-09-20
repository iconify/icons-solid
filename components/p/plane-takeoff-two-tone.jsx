import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lcr5o5b5e.css';
import '../../css/x/xx2d10y6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lcr5o5b5e"/><path class="xx2d10y6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plane-takeoff-two-tone"} {...others} />);
}

export default Component;
