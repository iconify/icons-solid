import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or-9nt8zt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or-9nt8zt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:lock-filled"} {...others} />);
}

export default Component;
