import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inlm6acfy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="inlm6acfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:track-select-right-tool-solid"} {...others} />);
}

export default Component;
