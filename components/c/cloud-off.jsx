import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d4wr7r1ny.css';
import '../../css/c/ctyjssbtz.css';
import '../../css/y/yzlba89ew.css';
import '../../css/b/b62pe3b5t.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d4wr7r1ny wm-shadow"/><path class="ctyjssbtz wm-shadow"/><path class="yzlba89ew"/><path class="b62pe3b5t"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-off"} {...others} />);
}

export default Component;
