import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og5zj6tba.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="og5zj6tba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rounded-square-with-dot"} {...others} />);
}

export default Component;
