import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgfmt1b6e.css';
import '../../css/y/yo3cu2bak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kgfmt1b6e"/><path class="yo3cu2bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:comment-discussion-24"} {...others} />);
}

export default Component;
