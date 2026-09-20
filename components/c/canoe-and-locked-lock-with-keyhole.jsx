import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awwjukbwj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="awwjukbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:canoe-and-locked-lock-with-keyhole"} {...others} />);
}

export default Component;
