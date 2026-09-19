import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0-2cj3rc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c0-2cj3rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-plus-empty"} {...others} />);
}

export default Component;
