import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4gcyob3k.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="k4gcyob3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:caret-square-right"} {...others} />);
}

export default Component;
