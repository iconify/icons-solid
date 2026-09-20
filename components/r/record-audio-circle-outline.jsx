import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_9bwc3ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b_9bwc3ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-audio-circle-outline"} {...others} />);
}

export default Component;
