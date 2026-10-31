import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u4p09bc9p.css';
import '../../css/e/ei94xd8sl.css';
import '../../css/x/xtsz61bsn.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u4p09bc9p wm-shadow"/><path class="ei94xd8sl wm-shadow"/><path class="xtsz61bsn"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wifi-off"} {...others} />);
}

export default Component;
