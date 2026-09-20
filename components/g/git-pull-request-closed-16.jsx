import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptwnyxbcw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ptwnyxbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-pull-request-closed-16"} {...others} />);
}

export default Component;
