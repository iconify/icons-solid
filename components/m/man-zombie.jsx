import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of_2nclse.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="of_2nclse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-zombie"} {...others} />);
}

export default Component;
