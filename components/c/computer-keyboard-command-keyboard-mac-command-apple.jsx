import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u89zr7b9a.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u89zr7b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-keyboard-command-keyboard-mac-command-apple"} {...others} />);
}

export default Component;
