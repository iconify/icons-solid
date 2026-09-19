import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se5j6sb6f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="se5j6sb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:order-stratus"} {...others} />);
}

export default Component;
