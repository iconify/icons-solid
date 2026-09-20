import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz9ab3bex.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wz9ab3bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-down-from-banknote-stack-in-slot"} {...others} />);
}

export default Component;
