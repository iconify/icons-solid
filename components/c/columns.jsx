import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr2xlsbcj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hr2xlsbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:columns"} {...others} />);
}

export default Component;
