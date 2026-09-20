import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j35i7-b-l.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="j35i7-b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:webcam-video-remix"} {...others} />);
}

export default Component;
