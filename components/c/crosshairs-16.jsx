import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohrnlbcwc.css';
import '../../css/z/zxdaapb1u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ohrnlbcwc"/><path class="zxdaapb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:crosshairs-16"} {...others} />);
}

export default Component;
