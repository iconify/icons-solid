import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/thkopl_9m.css';
import '../../css/m/mmgrvcb7f.css';
import '../../css/g/g67_oophs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="thkopl_9m"/><path class="mmgrvcb7f"/><path class="g67_oophs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:umbrella-off-sharp-duotone"} {...others} />);
}

export default Component;
