import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/f/fcn327o-m.css';
import '../../css/a/a_kv03c5c.css';
import '../../css/j/j-g6mgbto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="fcn327o-m"/><path class="a_kv03c5c"/><path class="j-g6mgbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rows"} {...others} />);
}

export default Component;
