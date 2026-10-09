import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gghdvqo-j.css';
import '../../css/r/rqsrs2a_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gghdvqo-j"/><path class="rqsrs2a_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:audit-20-bold"} {...others} />);
}

export default Component;
