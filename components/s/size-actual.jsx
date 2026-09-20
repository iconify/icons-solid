import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de-x6ubrj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="de-x6ubrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:size-actual"} {...others} />);
}

export default Component;
