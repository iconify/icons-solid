import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-c0ls6qa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w-c0ls6qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:spades-symbol"} {...others} />);
}

export default Component;
