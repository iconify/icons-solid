import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqrzlbb5j.css';
import '../../css/z/zh0ihf3kg.css';
import '../../css/m/m4desqzmm.css';
import '../../css/a/avr--i-3c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mqrzlbb5j"/><path class="zh0ihf3kg"/><path class="m4desqzmm"/><path class="avr--i-3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:overlap"} {...others} />);
}

export default Component;
