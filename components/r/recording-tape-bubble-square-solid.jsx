import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8gl3cc4j.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="w8gl3cc4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:recording-tape-bubble-square-solid"} {...others} />);
}

export default Component;
