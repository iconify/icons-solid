import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5lh0rb0o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l5lh0rb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-cloud-outline"} {...others} />);
}

export default Component;
