import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f87xs6bfr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="f87xs6bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:communitysmall"} {...others} />);
}

export default Component;
