import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufjnn8nee.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ufjnn8nee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:text-align-justify"} {...others} />);
}

export default Component;
