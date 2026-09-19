import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3i68y7an.css';

const viewBox = {"width":1022,"height":1010};
const content = `<path class="i3i68y7an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:taskfreak"} {...others} />);
}

export default Component;
