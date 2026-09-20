import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6lgoib4z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w6lgoib4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:command-line-filled"} {...others} />);
}

export default Component;
