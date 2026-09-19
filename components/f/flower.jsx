import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-b-jsbkc.css';
import '../../css/x/x796ssb0a.css';
import '../../css/p/ptmbtpbpn.css';
import '../../css/k/k1c77xo2b.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-b-jsbkc"/><path class="x796ssb0a"/><path clip-rule="evenodd" class="ptmbtpbpn"/><path clip-rule="evenodd" class="k1c77xo2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:flower"} {...others} />);
}

export default Component;
