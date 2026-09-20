import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6gcvvb0b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o6gcvvb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:thermometer"} {...others} />);
}

export default Component;
