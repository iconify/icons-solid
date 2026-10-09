import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9gesab3q.css';
import '../../css/q/qbvrdcndr.css';
import '../../css/e/ebvsrm49p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c9gesab3q"/><path class="qbvrdcndr"/><path class="ebvsrm49p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-cable-20"} {...others} />);
}

export default Component;
