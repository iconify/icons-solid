import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ryvi1j75x.css';
import '../../css/t/tl_x59b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ryvi1j75x"/><path class="tl_x59b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cog-8-tooth"} {...others} />);
}

export default Component;
