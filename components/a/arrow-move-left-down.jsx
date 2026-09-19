import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqoo24bfq.css';
import '../../css/z/z5vdgsbwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aqoo24bfq"/><path class="z5vdgsbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-move-left-down"} {...others} />);
}

export default Component;
