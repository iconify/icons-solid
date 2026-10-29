import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yfhih8buv.css';
import '../../css/d/dto_k4bxp.css';
import '../../css/n/nfutsrbtc.css';
import '../../css/i/iz1poibor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yfhih8buv"/><path class="dto_k4bxp"/><path class="nfutsrbtc"/><path class="iz1poibor wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dholak-duo"} {...others} />);
}

export default Component;
