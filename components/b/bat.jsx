import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lo5diacvh.css';
import '../../css/n/niy053bzl.css';
import '../../css/x/xd9vv6i7b.css';
import '../../css/p/psik3qb0g.css';
import '../../css/b/b-3admbxn.css';
import '../../css/k/kl2h-77kr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lo5diacvh wm-shadow"/><path class="niy053bzl wm-shadow"/><path class="xd9vv6i7b"/><path class="psik3qb0g"/><path class="b-3admbxn"/><path class="kl2h-77kr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bat"} {...others} />);
}

export default Component;
