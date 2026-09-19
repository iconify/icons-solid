import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fst7lybqp.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="fst7lybqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:deletefolder"} {...others} />);
}

export default Component;
