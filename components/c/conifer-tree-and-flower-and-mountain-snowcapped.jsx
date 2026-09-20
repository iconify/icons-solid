import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx68gfb4z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lx68gfb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:conifer-tree-and-flower-and-mountain-snowcapped"} {...others} />);
}

export default Component;
