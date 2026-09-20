import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wg4_nqeyw.css';
import '../../css/w/wzyb7sccb.css';
import '../../css/n/nt6hy5b_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wg4_nqeyw"/><path clip-rule="evenodd" class="wzyb7sccb"/><path class="nt6hy5b_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:streets-pin-filled"} {...others} />);
}

export default Component;
