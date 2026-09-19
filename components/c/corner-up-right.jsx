import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ps3tqtbia.css';
import '../../css/z/z0l6z2u7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ps3tqtbia"/><path class="z0l6z2u7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-up-right"} {...others} />);
}

export default Component;
