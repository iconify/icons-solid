import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy_qmbbxk.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="gy_qmbbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:turkish-lira-sign"} {...others} />);
}

export default Component;
