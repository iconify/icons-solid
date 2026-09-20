import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlpl7u3co.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nlpl7u3co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:camera-video-remix"} {...others} />);
}

export default Component;
