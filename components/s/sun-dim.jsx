import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b-hk6xuyl.css';
import '../../css/u/u5ilajbse.css';
import '../../css/s/s5-crub1t.css';
import '../../css/s/s8sl42beo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b-hk6xuyl wm-shadow"/><path class="u5ilajbse wm-shadow"/><path class="s5-crub1t"/><path class="s8sl42beo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sun-dim"} {...others} />);
}

export default Component;
