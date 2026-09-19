import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5i3hibgm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n5i3hibgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:arrow-redo-outline"} {...others} />);
}

export default Component;
