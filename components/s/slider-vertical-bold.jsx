import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/md1uaibwm.css';
import '../../css/f/fblsodb-h.css';
import '../../css/k/kxcghxbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="md1uaibwm"/><path class="fblsodb-h"/><path class="kxcghxbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-bold"} {...others} />);
}

export default Component;
