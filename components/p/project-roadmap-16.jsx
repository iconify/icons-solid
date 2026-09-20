import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6u24bczz.css';
import '../../css/k/k15odkf_p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j6u24bczz"/><path class="k15odkf_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:project-roadmap-16"} {...others} />);
}

export default Component;
