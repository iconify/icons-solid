import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg-14ob0u.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="eg-14ob0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:hand-holding-droplet"} {...others} />);
}

export default Component;
