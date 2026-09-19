import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4_g4nd3y.css';
import '../../css/g/g7862griq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n4_g4nd3y"/><path class="g7862griq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cloud-done-outline"} {...others} />);
}

export default Component;
