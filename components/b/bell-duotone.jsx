import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f47fbkbfi.css';
import '../../css/z/z8ew59bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f47fbkbfi"/><path class="z8ew59bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:bell-duotone"} {...others} />);
}

export default Component;
