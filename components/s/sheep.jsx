import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a04pjnbax.css';
import '../../css/f/fg8_02k5r.css';
import '../../css/y/yegt60bru.css';
import '../../css/c/cl2ti-b5h.css';
import '../../css/g/gtm7-0b9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a04pjnbax"/><path class="fg8_02k5r"/><path class="yegt60bru"/><path class="cl2ti-b5h"/><path class="gtm7-0b9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sheep"} {...others} />);
}

export default Component;
