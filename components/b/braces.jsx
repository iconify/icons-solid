import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_y4-6bvi.css';
import '../../css/v/va16dh44j.css';
import '../../css/l/lxbf6jb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_y4-6bvi wm-shadow"/><path class="va16dh44j wm-k"/><path class="lxbf6jb8n wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:braces"} {...others} />);
}

export default Component;
