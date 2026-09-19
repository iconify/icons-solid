import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lazrhbojf.css';

const viewBox = {"width":1664,"height":1408};
const content = `<path class="lazrhbojf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:quote-left"} {...others} />);
}

export default Component;
