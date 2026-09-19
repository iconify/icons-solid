import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4yfsnzeo.css';

const viewBox = {"width":640,"height":1024};
const content = `<path class="s4yfsnzeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:italic"} {...others} />);
}

export default Component;
