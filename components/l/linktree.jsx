import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4e783_3e.css';
import '../../css/v/vq5z-rl-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4e783_3e"/><path class="vq5z-rl-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:linktree"} {...others} />);
}

export default Component;
