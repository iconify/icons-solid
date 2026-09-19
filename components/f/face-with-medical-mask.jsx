import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w254xvbma.css';
import '../../css/x/xdp90xgqj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w254xvbma"/><path clip-rule="evenodd" class="xdp90xgqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-with-medical-mask"} {...others} />);
}

export default Component;
