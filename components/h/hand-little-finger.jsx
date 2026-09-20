import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m26zf4yei.css';
import '../../css/o/odibfhbmi.css';
import '../../css/c/czl7urd3e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m26zf4yei"/><path class="odibfhbmi"/><path class="czl7urd3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-little-finger"} {...others} />);
}

export default Component;
