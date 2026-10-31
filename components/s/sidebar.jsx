import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dpdeg3i2t.css';
import '../../css/r/rmf8ov87u.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/u/u5r7-lb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dpdeg3i2t wm-shadow"/><path class="rmf8ov87u wm-shadow"/><path class="cvpr-5bot"/><path class="u5r7-lb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sidebar"} {...others} />);
}

export default Component;
