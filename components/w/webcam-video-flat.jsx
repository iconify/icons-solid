import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaa1ls8_f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aaa1ls8_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:webcam-video-flat"} {...others} />);
}

export default Component;
