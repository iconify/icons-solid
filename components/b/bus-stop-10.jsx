import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5oq8rb2n.css';

const viewBox = {"width":10,"height":10};
const content = `<path class="r5oq8rb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:bus-stop-10"} {...others} />);
}

export default Component;
