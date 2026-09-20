import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yeef006fl.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yeef006fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-keyboard-asterisk-1-asterisk-star-keyboard"} {...others} />);
}

export default Component;
