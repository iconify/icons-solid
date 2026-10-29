import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-0sac1ac.css';
import '../../css/v/vkfs5tb6p.css';
import '../../css/f/fd5fwsfcn.css';
import '../../css/w/wgur2cb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-0sac1ac wm-k"/><path class="vkfs5tb6p wm-k"/><path class="fd5fwsfcn wm-k"/><path class="wgur2cb9s wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:briefcase"} {...others} />);
}

export default Component;
