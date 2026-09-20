import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kczvw2bym.css';
import '../../css/n/nv3-9gbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kczvw2bym"/><path class="nv3-9gbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chair2-duotone"} {...others} />);
}

export default Component;
