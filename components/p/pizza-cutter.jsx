import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p5mlz8atx.css';
import '../../css/z/z217ocb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p5mlz8atx"/><path class="z217ocb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pizza-cutter"} {...others} />);
}

export default Component;
