import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct-4h76ph.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="ct-4h76ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:arrow-top-left"} {...others} />);
}

export default Component;
