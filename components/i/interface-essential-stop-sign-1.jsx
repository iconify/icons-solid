import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhhz9ab1q.css';
import '../../css/x/xwfu_degj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qhhz9ab1q"/><path class="xwfu_degj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-stop-sign-1"} {...others} />);
}

export default Component;
