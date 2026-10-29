import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw83z9b-r.css';
import '../../css/t/t9-82h_yw.css';
import '../../css/d/d0870abvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k zw83z9b-r"/><path class="t9-82h_yw wm-k"/><path class="d0870abvw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:indent-increase"} {...others} />);
}

export default Component;
