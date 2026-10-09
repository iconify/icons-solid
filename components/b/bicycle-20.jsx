import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6zkfm9wf.css';
import '../../css/u/uuc-d5buj.css';
import '../../css/i/iw_-l-b0y.css';
import '../../css/r/rj8pwo61t.css';
import '../../css/h/hq6hy3pct.css';
import '../../css/a/az_x4yp1q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6zkfm9wf"/><path class="uuc-d5buj"/><path class="iw_-l-b0y"/><path class="rj8pwo61t"/><path class="hq6hy3pct"/><path class="az_x4yp1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bicycle-20"} {...others} />);
}

export default Component;
