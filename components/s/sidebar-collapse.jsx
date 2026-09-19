import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w2b66hb1e.css';
import '../../css/f/fs5_vbcwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w2b66hb1e"/><path class="fs5_vbcwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:sidebar-collapse"} {...others} />);
}

export default Component;
