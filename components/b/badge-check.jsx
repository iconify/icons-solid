import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqdsmob1w.css';
import '../../css/a/a5q1z5qkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqdsmob1w wm-k"/><path class="a5q1z5qkn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:badge-check"} {...others} />);
}

export default Component;
