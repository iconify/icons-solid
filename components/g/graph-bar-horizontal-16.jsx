import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czzl2nbyk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="czzl2nbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:graph-bar-horizontal-16"} {...others} />);
}

export default Component;
