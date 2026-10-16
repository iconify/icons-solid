import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t65xpx6zu.css';
import '../../css/p/psnhmojdp.css';
import '../../css/b/b8blzr_2w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t65xpx6zu"/><path class="psnhmojdp"/><path class="b8blzr_2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-off-20"} {...others} />);
}

export default Component;
