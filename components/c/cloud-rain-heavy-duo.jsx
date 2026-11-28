import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es0p8gbiv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rrq4fhbji.css';
import '../../css/v/vik7aybod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es0p8gbiv secondary"/><g class="dt0cm9dhy primary"><path class="rrq4fhbji"/><path class="vik7aybod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-rain-heavy-duo"} {...others} />);
}

export default Component;
