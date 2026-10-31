import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xt59310qq.css';
import '../../css/g/g12cnm02j.css';
import '../../css/j/j95zarbuq.css';
import '../../css/p/pii_8qbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xt59310qq"/><path class="g12cnm02j wm-shadow"/><path class="j95zarbuq"/><path class="pii_8qbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:minus"} {...others} />);
}

export default Component;
