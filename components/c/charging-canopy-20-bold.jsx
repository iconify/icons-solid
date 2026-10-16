import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfnsa8bub.css';
import '../../css/a/a8jgx4b9e.css';
import '../../css/x/xw8v0ibsm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rfnsa8bub"/><path class="a8jgx4b9e"/><path class="xw8v0ibsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-canopy-20-bold"} {...others} />);
}

export default Component;
