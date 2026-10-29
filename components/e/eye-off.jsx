import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3gm-abug.css';
import '../../css/g/gxgk1_b8t.css';
import '../../css/m/mbzw4qy1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3gm-abug wm-k"/><path class="gxgk1_b8t wm-s"/><path class="mbzw4qy1w wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:eye-off"} {...others} />);
}

export default Component;
