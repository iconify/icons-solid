import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_07ktnny.css';
import '../../css/j/jf0u8bbol.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o_07ktnny"/><path class="jf0u8bbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:play-stream-bold-duotone"} {...others} />);
}

export default Component;
