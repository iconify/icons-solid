import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_h1qpsmb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a_h1qpsmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:text-align-bottom"} {...others} />);
}

export default Component;
