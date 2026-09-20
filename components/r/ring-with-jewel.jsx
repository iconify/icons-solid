import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7ka-c69h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n7ka-c69h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ring-with-jewel"} {...others} />);
}

export default Component;
