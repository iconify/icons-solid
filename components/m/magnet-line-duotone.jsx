import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ga9ljm_pz.css';
import '../../css/z/znzepibwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ga9ljm_pz"/><path class="znzepibwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-line-duotone"} {...others} />);
}

export default Component;
