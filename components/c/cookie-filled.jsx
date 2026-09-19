import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym1fg2b7s.css';
import '../../css/q/qmopwkg8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ym1fg2b7s"/><path class="qmopwkg8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cookie-filled"} {...others} />);
}

export default Component;
