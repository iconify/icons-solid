import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7kzhix4g.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="a7kzhix4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:worktree-compact"} {...others} />);
}

export default Component;
