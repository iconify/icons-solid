import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/srj636mrs.css';
import '../../css/h/h2e1x5b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="srj636mrs"/><path class="h2e1x5b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mosque-01"} {...others} />);
}

export default Component;
