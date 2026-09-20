import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc6xhac8s.css';
import '../../css/b/bfv7rkbai.css';
import '../../css/d/ds-s0gbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc6xhac8s"/><path class="bfv7rkbai"/><path class="ds-s0gbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:messages-bubble-settings"} {...others} />);
}

export default Component;
