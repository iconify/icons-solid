import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvl9o-7-e.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="kvl9o-7-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:handcuffs"} {...others} />);
}

export default Component;
