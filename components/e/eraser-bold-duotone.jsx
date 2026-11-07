import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/d35ki5_lu.css';
import '../../css/r/rig3w4iiz.css';
import '../../css/u/u9ycn4s8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="d35ki5_lu"/><path class="rig3w4iiz"/></g><path class="u9ycn4s8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eraser-bold-duotone"} {...others} />);
}

export default Component;
