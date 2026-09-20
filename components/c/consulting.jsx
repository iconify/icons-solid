import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic87zvbqj.css';
import '../../css/h/h-plcb8jm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ic87zvbqj"/><path class="h-plcb8jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:consulting"} {...others} />);
}

export default Component;
