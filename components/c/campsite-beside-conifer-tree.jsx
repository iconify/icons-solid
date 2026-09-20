import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajw4rybce.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ajw4rybce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-beside-conifer-tree"} {...others} />);
}

export default Component;
