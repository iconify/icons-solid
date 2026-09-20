import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shdyh8bir.css';
import '../../css/a/ay_63acmb.css';
import '../../css/d/dyv9fpbor.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="shdyh8bir"/><path class="ay_63acmb"/><path class="dyv9fpbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langflow"} {...others} />);
}

export default Component;
