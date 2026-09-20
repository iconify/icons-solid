import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyj7ucbsu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cyj7ucbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:tunnel"} {...others} />);
}

export default Component;
