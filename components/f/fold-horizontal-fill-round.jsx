import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts83b_9vy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts83b_9vy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fold-horizontal-fill-round"} {...others} />);
}

export default Component;
