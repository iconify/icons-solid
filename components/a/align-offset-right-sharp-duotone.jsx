import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v311quo_r.css';
import '../../css/n/n8f3dyh2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="v311quo_r"/><path class="n8f3dyh2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-right-sharp-duotone"} {...others} />);
}

export default Component;
