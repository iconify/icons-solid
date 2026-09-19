import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxvyzpbvr.css';
import '../../css/s/sl2zlhbqn.css';
import '../../css/o/oc6808bph.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nxvyzpbvr"/><path class="sl2zlhbqn"/><path class="oc6808bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:color-picker"} {...others} />);
}

export default Component;
