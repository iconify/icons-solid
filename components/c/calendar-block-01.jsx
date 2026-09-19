import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/faixfyb0g.css';
import '../../css/y/ytpnlk6ox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="faixfyb0g"/><path class="ytpnlk6ox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-block-01"} {...others} />);
}

export default Component;
