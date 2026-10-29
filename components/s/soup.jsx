import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wup9xabdg.css';
import '../../css/w/wlwgd_xcs.css';
import '../../css/d/d84faeanp.css';
import '../../css/h/hyiuzhbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a wup9xabdg"/><path class="wlwgd_xcs wm-a"/><path class="d84faeanp wm-k"/><path class="hyiuzhbmd wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:soup"} {...others} />);
}

export default Component;
