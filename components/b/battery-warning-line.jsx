import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2xw8u1ge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2xw8u1ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:battery-warning-line"} {...others} />);
}

export default Component;
