import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x71_24qub.css';
import '../../css/c/cvi3d18na.css';
import '../../css/x/xpy4gbb2q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x71_24qub"/><path class="cvi3d18na"/><path class="xpy4gbb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jerrycan-48"} {...others} />);
}

export default Component;
