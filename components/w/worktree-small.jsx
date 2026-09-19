import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_h7uab0f.css';

const viewBox = {"width":10,"height":10};
const content = `<path class="k_h7uab0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:worktree-small"} {...others} />);
}

export default Component;
