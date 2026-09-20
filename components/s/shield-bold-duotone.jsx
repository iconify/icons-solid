import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9-eprb_m.css';
import '../../css/f/fxlaitjmj.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/ho1hk4giy.css';
import '../../css/f/fu9tnywzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s9-eprb_m"/><path class="fxlaitjmj"/><g class="mc2zb0bvp"><path class="ho1hk4giy"/><path class="fu9tnywzi"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-bold-duotone"} {...others} />);
}

export default Component;
