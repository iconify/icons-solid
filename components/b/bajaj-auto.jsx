import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lktgmqyfh.css';

const viewBox = {"width":100,"height":120};
const content = `<path class="lktgmqyfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bajaj-auto"} {...others} />);
}

export default Component;
