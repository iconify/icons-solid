import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-0a6u8qc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w-0a6u8qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-android"} {...others} />);
}

export default Component;
