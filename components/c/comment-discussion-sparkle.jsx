import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywile0box.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ywile0box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:comment-discussion-sparkle"} {...others} />);
}

export default Component;
