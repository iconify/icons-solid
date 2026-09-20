import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_4157bgu.css';
import '../../css/f/frw4m7ekt.css';
import '../../css/e/ehesr7bob.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r_4157bgu"/><path class="frw4m7ekt"/><path class="ehesr7bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-color-bucket"} {...others} />);
}

export default Component;
