import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dpfi26pss.css';
import '../../css/o/oip2tteqt.css';
import '../../css/c/czuzz3bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dpfi26pss"/><path class="oip2tteqt"/><path class="czuzz3bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-lib-duotone"} {...others} />);
}

export default Component;
