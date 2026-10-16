import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3fi3cbul.css';
import '../../css/l/l_4g_xmjp.css';
import '../../css/a/adc7zwbbk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y3fi3cbul"/><path class="l_4g_xmjp"/><path class="adc7zwbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-outgoing-20-bold"} {...others} />);
}

export default Component;
