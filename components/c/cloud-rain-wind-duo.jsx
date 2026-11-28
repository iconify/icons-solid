import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znclo2baj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1ydfnpwv.css';
import '../../css/v/vn8k770_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary znclo2baj"/><g class="dt0cm9dhy primary"><path class="q1ydfnpwv"/><path class="vn8k770_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-rain-wind-duo"} {...others} />);
}

export default Component;
