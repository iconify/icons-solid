import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnjgqg3vf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rnjgqg3vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:monument-14"} {...others} />);
}

export default Component;
