import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ikibw8b0n.css';
import '../../css/h/hkp0csiud.css';
import '../../css/k/kvz_424cx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ikibw8b0n"/><path class="hkp0csiud"/><path class="kvz_424cx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sms-star"} {...others} />);
}

export default Component;
