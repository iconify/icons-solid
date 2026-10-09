import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czxxxcbar.css';
import '../../css/g/ga-ypktcu.css';
import '../../css/e/em6--xtxd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="czxxxcbar"/><path class="ga-ypktcu"/><path class="em6--xtxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airport-20-bold"} {...others} />);
}

export default Component;
