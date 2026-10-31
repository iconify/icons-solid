import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/ru0ogu6ne.css';
import '../../css/h/hvf9obccc.css';
import '../../css/z/zov6w8o_w.css';
import '../../css/o/oha5ghnpr.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ru0ogu6ne wm-shadow"/><path class="hvf9obccc wm-shadow"/><path class="zov6w8o_w"/><path class="oha5ghnpr"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flag-off"} {...others} />);
}

export default Component;
