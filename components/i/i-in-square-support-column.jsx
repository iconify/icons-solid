import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu6v7ibol.css';
import '../../css/v/vgo3iyb4j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mu6v7ibol"/><path class="vgo3iyb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:i-in-square-support-column"} {...others} />);
}

export default Component;
