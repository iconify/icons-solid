import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey-ar0bsu.css';

const viewBox = {"width":666,"height":644};
const content = `<path class="ey-ar0bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:alignright"} {...others} />);
}

export default Component;
