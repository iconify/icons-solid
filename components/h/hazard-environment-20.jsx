import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6_s1zkbf.css';
import '../../css/l/l8i64_wsn.css';
import '../../css/r/r41ol3t2y.css';
import '../../css/s/sxqz2irrj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e6_s1zkbf"/><path class="l8i64_wsn"/><path class="r41ol3t2y"/><path class="sxqz2irrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-environment-20"} {...others} />);
}

export default Component;
