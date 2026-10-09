import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-nxg9bwf.css';
import '../../css/u/u5r5zmbsy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-nxg9bwf"/><path class="u5r5zmbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refinery-20-bold"} {...others} />);
}

export default Component;
