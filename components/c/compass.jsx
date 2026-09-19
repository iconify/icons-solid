import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lceo2ybkv.css';
import '../../css/h/hkb4kmbmc.css';
import '../../css/x/xrz9d4b_i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="lceo2ybkv"/><path class="hkb4kmbmc"/><path class="xrz9d4b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:compass"} {...others} />);
}

export default Component;
