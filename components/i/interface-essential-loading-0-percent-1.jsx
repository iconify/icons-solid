import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyrb38t5a.css';
import '../../css/j/j5891ebpp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dyrb38t5a"/><path class="j5891ebpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-loading-0-percent-1"} {...others} />);
}

export default Component;
