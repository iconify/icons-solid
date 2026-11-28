import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtk28sbwi.css';
import '../../css/h/hme0rabnh.css';
import '../../css/r/req8k0dco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gtk28sbwi"/><path class="hme0rabnh"/><path class="req8k0dco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:graduation-cap"} {...others} />);
}

export default Component;
