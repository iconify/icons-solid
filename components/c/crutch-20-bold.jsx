import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpntfiblm.css';
import '../../css/e/e2d5-ccdw.css';
import '../../css/s/sahhgmcex.css';
import '../../css/y/ycxbyhbyi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xpntfiblm"/><path class="e2d5-ccdw"/><path class="sahhgmcex"/><path class="ycxbyhbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crutch-20-bold"} {...others} />);
}

export default Component;
