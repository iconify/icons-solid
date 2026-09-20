import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-hw09zhx.css';
import '../../css/b/bbzizl2ta.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c-hw09zhx"/><path class="bbzizl2ta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-microphone"} {...others} />);
}

export default Component;
