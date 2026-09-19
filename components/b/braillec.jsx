import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0rrt-0dx.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="h0rrt-0dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:braillec"} {...others} />);
}

export default Component;
