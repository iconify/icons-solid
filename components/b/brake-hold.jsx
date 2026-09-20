import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/i/iqxnjc.css';
import '../../css/g/g_t0ty.css';
import '../../css/v/v562ka.css';
import '../../css/z/zohreb.css';
import '../../css/x/xi0c9c.css';
import '../../css/d/d-6rhe.css';
import '../../css/s/so-from-54.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c iqxnjc"/><path class="a0m25c g_t0ty"/><path class="a0m25c v562ka"/><path class="a0m25c zohreb"/><path class="a0m25c xi0c9c"/><path class="a0m25c d-6rhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:brake-hold"} {...others} />);
}

export default Component;
