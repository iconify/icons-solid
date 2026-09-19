import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz8x56pxe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fz8x56pxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:waist-circumference"} {...others} />);
}

export default Component;
