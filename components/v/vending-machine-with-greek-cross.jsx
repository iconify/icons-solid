import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro9gsfbig.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ro9gsfbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:vending-machine-with-greek-cross"} {...others} />);
}

export default Component;
