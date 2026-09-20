import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjmw7zpnx.css';
import '../../css/o/oz3hiebwf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rjmw7zpnx"/><path class="oz3hiebwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copilot-16"} {...others} />);
}

export default Component;
