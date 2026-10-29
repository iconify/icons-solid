import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jom3tejxu.css';
import '../../css/k/k9315ht5u.css';
import '../../css/x/x9o9b89sz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jom3tejxu wm-a"/><path class="k9315ht5u wm-k"/><path class="wm-k x9o9b89sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:eraser"} {...others} />);
}

export default Component;
