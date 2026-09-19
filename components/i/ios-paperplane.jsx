import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhvnz9bwg.css';
import '../../css/s/soter0kom.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hhvnz9bwg"/><path class="soter0kom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-paperplane"} {...others} />);
}

export default Component;
