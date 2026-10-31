import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t6f7kl7zy.css';
import '../../css/u/u1k-vk9af.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t6f7kl7zy wm-k"/><path class="u1k-vk9af wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:folder-x"} {...others} />);
}

export default Component;
