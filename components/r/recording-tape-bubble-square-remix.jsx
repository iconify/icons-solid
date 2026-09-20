import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpy9_6bht.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="cpy9_6bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:recording-tape-bubble-square-remix"} {...others} />);
}

export default Component;
