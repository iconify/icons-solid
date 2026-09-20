import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytw0m4b6h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ytw0m4b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-down-from-banknote-in-slot"} {...others} />);
}

export default Component;
