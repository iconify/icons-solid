import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbvaqc3bs.css';
import '../../css/g/gzkz7w-og.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mbvaqc3bs"/><path class="gzkz7w-og"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-move-down-left"} {...others} />);
}

export default Component;
