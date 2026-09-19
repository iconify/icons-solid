import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxi-l1bjn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lxi-l1bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:octoloaderthree"} {...others} />);
}

export default Component;
