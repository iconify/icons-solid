import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdd6--buf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zdd6--buf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:paperclip-2-solid"} {...others} />);
}

export default Component;
