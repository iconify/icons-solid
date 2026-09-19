import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8b-mib4c.css';
import '../../css/v/vs9a-qkba.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="h8b-mib4c"/><path class="vs9a-qkba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-left-fill-12"} {...others} />);
}

export default Component;
