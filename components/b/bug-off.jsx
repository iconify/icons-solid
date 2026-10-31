import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ogppwwbuu.css';
import '../../css/p/pl78pba8t.css';
import '../../css/x/xlgojjcgx.css';
import '../../css/w/wch0ii58t.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ogppwwbuu wm-shadow"/><path class="pl78pba8t wm-shadow"/><path class="xlgojjcgx"/><path class="wch0ii58t"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bug-off"} {...others} />);
}

export default Component;
