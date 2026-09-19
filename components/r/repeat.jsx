import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g72s45xtx.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="g72s45xtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:repeat"} {...others} />);
}

export default Component;
