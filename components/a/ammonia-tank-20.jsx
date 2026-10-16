import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psgy_eb5i.css';
import '../../css/x/x-nm31bum.css';
import '../../css/u/u9z2pachv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="psgy_eb5i"/><path class="x-nm31bum"/><path class="u9z2pachv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-tank-20"} {...others} />);
}

export default Component;
