import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji7elbcuq.css';
import '../../css/n/ne0cv4kxd.css';
import '../../css/x/xd30uik4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji7elbcuq wm-k"/><path class="ne0cv4kxd wm-k"/><path class="wm-a xd30uik4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:leaf"} {...others} />);
}

export default Component;
