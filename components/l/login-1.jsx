import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu7epyb8d.css';
import '../../css/g/g5ksf45rz.css';
import '../../css/d/dzpv33b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hu7epyb8d"/><path class="g5ksf45rz"/><path class="dzpv33b3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:login-1"} {...others} />);
}

export default Component;
