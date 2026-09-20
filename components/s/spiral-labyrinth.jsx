import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glrqkxbtj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="glrqkxbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spiral-labyrinth"} {...others} />);
}

export default Component;
