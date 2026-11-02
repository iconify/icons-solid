import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxr_m4b9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxr_m4b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:x-skew-line"} {...others} />);
}

export default Component;
