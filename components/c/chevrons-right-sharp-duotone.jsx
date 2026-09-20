import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/apnwk70fe.css';
import '../../css/u/ukdu5oalo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="apnwk70fe"/><path class="ukdu5oalo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-right-sharp-duotone"} {...others} />);
}

export default Component;
