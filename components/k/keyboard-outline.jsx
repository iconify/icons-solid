import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbww4uc3o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fbww4uc3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:keyboard-outline"} {...others} />);
}

export default Component;
