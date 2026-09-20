import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjehtdb3z.css';
import '../../css/y/ys0-a9buz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mjehtdb3z"/><path class="ys0-a9buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:wechat-logo"} {...others} />);
}

export default Component;
