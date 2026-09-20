import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu8d-fbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gu8d-fbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:voice-typing-word-convert-remix"} {...others} />);
}

export default Component;
