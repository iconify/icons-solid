import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd01kcbfz.css';
import '../../css/n/nzce9ndyg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cd01kcbfz"/><path class="nzce9ndyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-pause-outline"} {...others} />);
}

export default Component;
