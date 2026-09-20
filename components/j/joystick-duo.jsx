import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/d/dto37ib1f.css';
import '../../css/t/twweyxo1y.css';
import '../../css/g/ga3fcn2xs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="municvskz"/><path class="dto37ib1f"/><path class="twweyxo1y"/><path class="ga3fcn2xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:joystick-duo"} {...others} />);
}

export default Component;
