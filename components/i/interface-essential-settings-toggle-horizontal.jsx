import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyf5y1bmq.css';
import '../../css/c/c74pkebbh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qyf5y1bmq"/><path class="c74pkebbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-settings-toggle-horizontal"} {...others} />);
}

export default Component;
