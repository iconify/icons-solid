import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzt0k9bvt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nzt0k9bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:palm-tree"} {...others} />);
}

export default Component;
