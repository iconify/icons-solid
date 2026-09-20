import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d893tlfxc.css';
import '../../css/g/gg5vsjb1c.css';
import '../../css/y/yte3hrxwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d893tlfxc"/><path class="gg5vsjb1c"/><path class="yte3hrxwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bomb"} {...others} />);
}

export default Component;
