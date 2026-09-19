import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohz7-3zmu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ohz7-3zmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:equalizer"} {...others} />);
}

export default Component;
