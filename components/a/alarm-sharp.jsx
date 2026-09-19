import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_9dkpbmu.css';
import '../../css/o/o3b3gk40z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e_9dkpbmu"/><path class="o3b3gk40z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:alarm-sharp"} {...others} />);
}

export default Component;
