import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hhlrbab5g.css';
import '../../css/k/ktkuo0bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="hhlrbab5g"/><path class="ktkuo0bsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-off-sharp-duotone"} {...others} />);
}

export default Component;
