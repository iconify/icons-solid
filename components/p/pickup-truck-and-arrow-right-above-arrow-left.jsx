import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji2s539xn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ji2s539xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pickup-truck-and-arrow-right-above-arrow-left"} {...others} />);
}

export default Component;
