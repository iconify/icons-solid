import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w87z4bc7f.css';
import '../../css/p/ptdwi5b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w87z4bc7f"/><path class="ptdwi5b_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-input"} {...others} />);
}

export default Component;
