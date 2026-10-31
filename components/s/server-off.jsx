import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/joaokpbeo.css';
import '../../css/s/smvlfz72e.css';
import '../../css/e/ea608dg5t.css';
import '../../css/z/zb08tpbsq.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="joaokpbeo wm-shadow"/><path class="smvlfz72e wm-shadow"/><path class="ea608dg5t"/><path class="zb08tpbsq"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:server-off"} {...others} />);
}

export default Component;
