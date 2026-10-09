import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay_tk8c1e.css';
import '../../css/l/lg77w-bbs.css';
import '../../css/a/aq913o2sy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ay_tk8c1e"/><path class="lg77w-bbs"/><path class="aq913o2sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crystal-20-bold"} {...others} />);
}

export default Component;
