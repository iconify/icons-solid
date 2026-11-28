import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eirgzobiv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/o/oh-4yubrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eirgzobiv secondary"/><g class="dt0cm9dhy primary"><path class="mie31z6an"/><path class="oh-4yubrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:check-square-duo"} {...others} />);
}

export default Component;
