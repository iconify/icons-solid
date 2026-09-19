import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y03fodbhj.css';
import '../../css/z/z-rhwwb-y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y03fodbhj"/><path class="z-rhwwb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-upload"} {...others} />);
}

export default Component;
