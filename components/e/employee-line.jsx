import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro8s8ib8b.css';
import '../../css/t/terfpnntt.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="ro8s8ib8b"/><path class="terfpnntt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:employee-line"} {...others} />);
}

export default Component;
