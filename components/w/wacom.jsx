import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0bm4bcod.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z0bm4bcod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:wacom"} {...others} />);
}

export default Component;
