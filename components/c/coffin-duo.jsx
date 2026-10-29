import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mnmnwsbrk.css';
import '../../css/t/t2zlwccha.css';
import '../../css/i/ipva-ybxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mnmnwsbrk"/><path class="t2zlwccha wm-a"/><path class="ipva-ybxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coffin-duo"} {...others} />);
}

export default Component;
