import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2zh3obzl.css';
import '../../css/u/upem778kj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e2zh3obzl"/><path class="upem778kj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heart-pulse-20"} {...others} />);
}

export default Component;
