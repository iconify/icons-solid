import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7sb9bv6h.css';

const viewBox = {"width":1026,"height":1025};
const content = `<path class="e7sb9bv6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:satellite"} {...others} />);
}

export default Component;
