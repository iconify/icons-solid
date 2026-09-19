import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cos1jybps.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cos1jybps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:minimize-fill-12"} {...others} />);
}

export default Component;
