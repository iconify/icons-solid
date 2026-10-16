import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azssgq8vo.css';
import '../../css/b/b6p4-fb1s.css';
import '../../css/f/fuuzkap4n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="azssgq8vo"/><path class="b6p4-fb1s"/><path class="fuuzkap4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-toxic-48"} {...others} />);
}

export default Component;
