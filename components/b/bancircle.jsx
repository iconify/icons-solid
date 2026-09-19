import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g85vmmbbx.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="g85vmmbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bancircle"} {...others} />);
}

export default Component;
