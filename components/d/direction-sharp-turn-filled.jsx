import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xehppybnx.css';
import '../../css/m/mhx0gfbex.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xehppybnx"/><path class="mhx0gfbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-sharp-turn-filled"} {...others} />);
}

export default Component;
