import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3ba3acpx.css';

const viewBox = {"width":1025,"height":710};
const content = `<path class="g3ba3acpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:simplepie"} {...others} />);
}

export default Component;
