import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7vnfusos.css';
import '../../css/i/ia1foupjh.css';
import '../../css/a/ag43tybwg.css';
import '../../css/a/azx8l-8-x.css';
import '../../css/x/xjsvhebnt.css';
import '../../css/b/bf5ccccov.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r7vnfusos"/><path class="ia1foupjh"/><path class="ag43tybwg"/><circle class="azx8l-8-x"/><circle class="xjsvhebnt"/><circle class="bf5ccccov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:salt"} {...others} />);
}

export default Component;
