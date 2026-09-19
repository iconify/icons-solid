import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_ew_za4s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="i_ew_za4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:avengers"} {...others} />);
}

export default Component;
