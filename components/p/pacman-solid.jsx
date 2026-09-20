import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqu14h6hf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zqu14h6hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pacman-solid"} {...others} />);
}

export default Component;
