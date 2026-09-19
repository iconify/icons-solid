import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/ws7tt80dx.css';
import '../../css/u/ufw1mbb_w.css';
import '../../css/m/mphyl5x1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ws7tt80dx"/><path class="ufw1mbb_w"/><path class="mphyl5x1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-preview-01"} {...others} />);
}

export default Component;
