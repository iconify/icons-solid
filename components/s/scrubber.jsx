import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc46r_4jg.css';
import '../../css/r/r0a92247z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oc46r_4jg"/><path class="r0a92247z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:scrubber"} {...others} />);
}

export default Component;
