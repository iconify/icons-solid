import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy9tbfb-j.css';
import '../../css/p/pj07l70hj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gy9tbfb-j"/><path class="pj07l70hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:square-circle-16"} {...others} />);
}

export default Component;
