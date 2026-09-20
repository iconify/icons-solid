import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8-0_7brf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="y8-0_7brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pathfinder-trim-solid"} {...others} />);
}

export default Component;
