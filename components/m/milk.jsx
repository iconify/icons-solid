import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lzktixi6u.css';
import '../../css/a/a0w1p2bhg.css';
import '../../css/j/jhgclgbua.css';
import '../../css/u/uyc4ssfot.css';
import '../../css/v/vp46a0b9f.css';
import '../../css/y/yzx76tbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lzktixi6u wm-shadow"/><path class="a0w1p2bhg wm-shadow"/><path class="jhgclgbua"/><path class="uyc4ssfot"/><path class="vp46a0b9f"/><path class="yzx76tbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:milk"} {...others} />);
}

export default Component;
