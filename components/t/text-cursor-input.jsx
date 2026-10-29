import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy05ngn_w.css';
import '../../css/r/r76_vnpan.css';
import '../../css/b/b3q0u7byj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy05ngn_w wm-k"/><path class="r76_vnpan wm-a"/><path class="b3q0u7byj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:text-cursor-input"} {...others} />);
}

export default Component;
