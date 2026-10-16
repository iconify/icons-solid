import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz6k66c-q.css';
import '../../css/r/rkadl_r6j.css';
import '../../css/t/tcaouzbll.css';
import '../../css/m/meg5fm1wc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xz6k66c-q"/><path class="rkadl_r6j"/><path class="tcaouzbll"/><path class="meg5fm1wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weather-vane-20-bold"} {...others} />);
}

export default Component;
