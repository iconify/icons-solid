import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/abbkbue9p.css';
import '../../css/j/j-ysq9bcd.css';
import '../../css/h/hqpw_ub5e.css';
import '../../css/w/wpadycgsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="abbkbue9p wm-shadow"/><path class="j-ysq9bcd wm-shadow"/><path class="hqpw_ub5e"/><path class="wpadycgsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:banana"} {...others} />);
}

export default Component;
