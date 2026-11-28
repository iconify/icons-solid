import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9mzy0bvl.css';
import '../../css/h/hji4qyb_f.css';
import '../../css/g/ggzc0sbvp.css';
import '../../css/f/f6e4wevlm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y9mzy0bvl"/><path class="hji4qyb_f"/><path class="ggzc0sbvp"/><path class="f6e4wevlm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-clock"} {...others} />);
}

export default Component;
