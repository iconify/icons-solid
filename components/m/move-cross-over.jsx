import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an5sm2bsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="an5sm2bsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:move-cross-over"} {...others} />);
}

export default Component;
