import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt0yw-b-f.css';
import '../../css/j/j6fm-zcrt.css';
import '../../css/p/pacun0b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k zt0yw-b-f"/><path class="j6fm-zcrt wm-a"/><path class="pacun0b5f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:save"} {...others} />);
}

export default Component;
