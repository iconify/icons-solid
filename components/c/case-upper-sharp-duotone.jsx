import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h0eqbkbhb.css';
import '../../css/s/s-3hk0-1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="h0eqbkbhb"/><path class="s-3hk0-1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:case-upper-sharp-duotone"} {...others} />);
}

export default Component;
