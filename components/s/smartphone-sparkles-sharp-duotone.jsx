import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/iilrtq97p.css';
import '../../css/l/l9gqw4bde.css';
import '../../css/f/fmu2vzbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="iilrtq97p"/><path class="l9gqw4bde"/><path class="fmu2vzbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
