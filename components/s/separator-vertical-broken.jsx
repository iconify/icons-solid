import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l678ypbwk.css';
import '../../css/m/mwz2inb5v.css';
import '../../css/x/x1f4lc3zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l678ypbwk"/><path class="mwz2inb5v"/><path class="x1f4lc3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-vertical-broken"} {...others} />);
}

export default Component;
