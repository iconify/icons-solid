import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmz2_w97h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qmz2_w97h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:label-filled"} {...others} />);
}

export default Component;
