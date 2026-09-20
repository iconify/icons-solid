import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1rz5ob3q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y1rz5ob3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:paint-15"} {...others} />);
}

export default Component;
