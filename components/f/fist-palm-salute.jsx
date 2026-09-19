import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke4yrccol.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ke4yrccol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:fist-palm-salute"} {...others} />);
}

export default Component;
