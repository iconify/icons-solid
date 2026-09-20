import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpw9e4bba.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="lpw9e4bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hand-held-tablet-drawing-remix"} {...others} />);
}

export default Component;
