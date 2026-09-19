import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrl1jkw7i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zrl1jkw7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-fastforward-outline"} {...others} />);
}

export default Component;
