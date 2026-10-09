import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntlisvb1z.css';
import '../../css/u/u1qifac6a.css';
import '../../css/c/cs4mpneqe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ntlisvb1z"/><path class="u1qifac6a"/><path class="cs4mpneqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tape-measure-20"} {...others} />);
}

export default Component;
