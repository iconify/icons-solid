import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx22py_3q.css';
import '../../css/p/pbqy1midv.css';
import '../../css/c/cgwmaqb9u.css';
import '../../css/m/ms0kdob0d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dx22py_3q"/><path class="pbqy1midv"/><path class="cgwmaqb9u"/><path class="ms0kdob0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-waiting-hourglass-loading"} {...others} />);
}

export default Component;
