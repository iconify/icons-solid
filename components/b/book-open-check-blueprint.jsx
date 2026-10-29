import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/unhy7-bno.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/s/sv4u3ncql.css';
import '../../css/u/uh6a78blk.css';
import '../../css/p/pth9bvbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="unhy7-bno wm-deco"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="sv4u3ncql wm-k"/><path class="uh6a78blk wm-a"/><path class="pth9bvbqd wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-check-blueprint"} {...others} />);
}

export default Component;
