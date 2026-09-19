import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de0ny6bst.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="de0ny6bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:arrowdown"} {...others} />);
}

export default Component;
