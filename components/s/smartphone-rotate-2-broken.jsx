import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j44k1ormw.css';
import '../../css/m/mw5i2qouq.css';
import '../../css/h/hal8f3bya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j44k1ormw"/><path class="mw5i2qouq"/><path class="hal8f3bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-2-broken"} {...others} />);
}

export default Component;
