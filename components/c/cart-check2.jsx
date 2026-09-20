import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0uat2jga.css';
import '../../css/m/m6rp1rmkb.css';
import '../../css/w/w9p3ambxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0uat2jga"/><path class="m6rp1rmkb"/><path clip-rule="evenodd" class="w9p3ambxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart-check2"} {...others} />);
}

export default Component;
