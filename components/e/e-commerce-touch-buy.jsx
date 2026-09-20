import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/muqxio5hx.css';
import '../../css/f/f0x3oabaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="muqxio5hx"/><path class="f0x3oabaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:e-commerce-touch-buy"} {...others} />);
}

export default Component;
