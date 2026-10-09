import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9dt598cv.css';
import '../../css/t/t3c_y_tvs.css';
import '../../css/j/janp2_10w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v9dt598cv"/><path class="t3c_y_tvs"/><path class="janp2_10w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trophy-20"} {...others} />);
}

export default Component;
