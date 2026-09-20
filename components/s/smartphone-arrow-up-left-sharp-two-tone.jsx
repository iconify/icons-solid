import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ctkwnzbjp.css';
import '../../css/t/tsmn6ab9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ctkwnzbjp"/><path class="tsmn6ab9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-arrow-up-left-sharp-two-tone"} {...others} />);
}

export default Component;
