import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c65g52bnz.css';
import '../../css/r/rrzsnmslp.css';
import '../../css/y/ykwud4bvv.css';
import '../../css/x/xunj3qfuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c65g52bnz wm-shadow"/><path class="rrzsnmslp wm-shadow"/><path class="ykwud4bvv"/><path class="xunj3qfuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:plug"} {...others} />);
}

export default Component;
