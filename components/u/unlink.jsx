import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxry_0vvk.css';
import '../../css/e/easy1lbny.css';
import '../../css/a/a_-wkp7vc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yxry_0vvk"/><path class="easy1lbny wm-k"/><path class="a_-wkp7vc wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:unlink"} {...others} />);
}

export default Component;
