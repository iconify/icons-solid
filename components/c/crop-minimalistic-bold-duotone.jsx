import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynvhk2btp.css';
import '../../css/q/qn6zfg6br.css';
import '../../css/g/g0c5c7u0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ynvhk2btp"/><path class="qn6zfg6br"/><path class="g0c5c7u0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crop-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
