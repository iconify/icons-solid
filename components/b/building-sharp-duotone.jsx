import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z_zygfbdd.css';
import '../../css/e/elgskmn3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="z_zygfbdd"/><path class="elgskmn3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:building-sharp-duotone"} {...others} />);
}

export default Component;
