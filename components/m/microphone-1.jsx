import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbcv2ibqv.css';
import '../../css/q/q9u93xp0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lbcv2ibqv"/><path class="q9u93xp0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:microphone-1"} {...others} />);
}

export default Component;
