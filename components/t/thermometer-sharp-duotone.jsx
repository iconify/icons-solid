import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xkmafkb6z.css';
import '../../css/t/tkdid9ndg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="xkmafkb6z"/><path class="tkdid9ndg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:thermometer-sharp-duotone"} {...others} />);
}

export default Component;
