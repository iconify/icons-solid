import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jiq4423km.css';
import '../../css/w/wgsrnv-jf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jiq4423km"/><path class="wgsrnv-jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-turn-up"} {...others} />);
}

export default Component;
