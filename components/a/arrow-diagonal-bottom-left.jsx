import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae7x5gbcr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ae7x5gbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:arrow-diagonal-bottom-left"} {...others} />);
}

export default Component;
