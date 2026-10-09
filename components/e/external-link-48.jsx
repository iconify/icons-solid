import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7tl3x9ws.css';
import '../../css/b/bbz-6ubma.css';
import '../../css/l/lj5rvulqf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l7tl3x9ws"/><path class="bbz-6ubma"/><path class="lj5rvulqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:external-link-48"} {...others} />);
}

export default Component;
