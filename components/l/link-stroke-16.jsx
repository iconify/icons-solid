import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg28ebbry.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mg28ebbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:link-stroke-16"} {...others} />);
}

export default Component;
