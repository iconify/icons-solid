import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz4d19ipl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rz4d19ipl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:turning-loop"} {...others} />);
}

export default Component;
