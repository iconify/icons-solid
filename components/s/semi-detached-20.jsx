import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6t-wwj2r.css';
import '../../css/c/cm_9ngbtm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d6t-wwj2r"/><path class="cm_9ngbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:semi-detached-20"} {...others} />);
}

export default Component;
