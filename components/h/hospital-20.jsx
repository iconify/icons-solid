import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-z0-wtpr.css';
import '../../css/c/c2yq94b2t.css';
import '../../css/j/jwhg0sbfc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e-z0-wtpr"/><path class="c2yq94b2t"/><path class="jwhg0sbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hospital-20"} {...others} />);
}

export default Component;
