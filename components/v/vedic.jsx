import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfhd0ccqv.css';

const viewBox = {"width":356,"height":400,"top":-15};
const content = `<path class="colorff4500 svgShape yfhd0ccqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:vedic"} {...others} />);
}

export default Component;
