import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vd5gwrbhz.css';
import '../../css/l/l3iub1bhv.css';
import '../../css/o/o5esmw4te.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="cuyn6tgcc"><path class="vd5gwrbhz"/><path class="l3iub1bhv"/><path class="o5esmw4te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-octocat"} {...others} />);
}

export default Component;
