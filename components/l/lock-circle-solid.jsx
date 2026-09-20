import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en8iypeyz.css';
import '../../css/q/qgciedcam.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="en8iypeyz"/><path clip-rule="evenodd" class="qgciedcam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:lock-circle-solid"} {...others} />);
}

export default Component;
