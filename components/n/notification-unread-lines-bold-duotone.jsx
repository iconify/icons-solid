import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_baz6b3x.css';
import '../../css/t/tyxy_pbkb.css';
import '../../css/w/wuwwynbpg.css';
import '../../css/n/n5fjpab4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b_baz6b3x"/><path class="tyxy_pbkb"/><path class="wuwwynbpg"/><path class="n5fjpab4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-bold-duotone"} {...others} />);
}

export default Component;
