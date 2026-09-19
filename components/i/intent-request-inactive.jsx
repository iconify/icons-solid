import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_bsnpbbl.css';
import '../../css/j/j7f3w3rlj.css';
import '../../css/s/sdf8cb9as.css';
import '../../css/a/arfms3bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="h_bsnpbbl"/><circle class="j7f3w3rlj"/><circle class="sdf8cb9as"/><path class="arfms3bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:intent-request-inactive"} {...others} />);
}

export default Component;
