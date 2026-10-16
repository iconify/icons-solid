import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7x5yta8s.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/p/pssx0khhj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l7x5yta8s"/><path class="kvl9ucc0s"/><path class="pssx0khhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-off-20"} {...others} />);
}

export default Component;
