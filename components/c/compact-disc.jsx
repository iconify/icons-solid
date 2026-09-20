import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-9-2ob4w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c-9-2ob4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:compact-disc"} {...others} />);
}

export default Component;
