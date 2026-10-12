import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypdbq18lk.css';
import '../../css/r/rx1hzxbjc.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ypdbq18lk"/><path class="rx1hzxbjc"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:router-x-20-bold"} {...others} />);
}

export default Component;
