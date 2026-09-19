import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdl8c9zis.css';
import '../../css/y/ydhwbwb1q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qdl8c9zis"/><path class="ydhwbwb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:misuse-outline"} {...others} />);
}

export default Component;
