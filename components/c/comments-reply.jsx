import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jet3vgb5x.css';
import '../../css/i/ija69877e.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="jet3vgb5x"/><path class="ija69877e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:comments-reply"} {...others} />);
}

export default Component;
