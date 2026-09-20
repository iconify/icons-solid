import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4rb44b0t.css';
import '../../css/i/i5w7s1btf.css';
import '../../css/w/wl2no6bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y4rb44b0t"/><path class="i5w7s1btf"/><path class="wl2no6bnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:password3"} {...others} />);
}

export default Component;
