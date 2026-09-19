import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbk84rbbr.css';

const viewBox = {"width":1792,"height":1472};
const content = `<path class="sbk84rbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:sunrise-o"} {...others} />);
}

export default Component;
