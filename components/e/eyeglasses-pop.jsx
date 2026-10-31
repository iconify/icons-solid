import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug4q0kp-p.css';
import '../../css/k/ka2c7mgvz.css';
import '../../css/i/i3adw-gni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ug4q0kp-p"/><path class="ka2c7mgvz"/><path class="i3adw-gni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:eyeglasses-pop"} {...others} />);
}

export default Component;
