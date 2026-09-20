import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8xvovblm.css';
import '../../css/y/yf-lyevcq.css';
import '../../css/g/ggg8orb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y8xvovblm"/><path clip-rule="evenodd" class="yf-lyevcq"/><path class="ggg8orb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:reel2-duotone"} {...others} />);
}

export default Component;
