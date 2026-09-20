import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb4srfb6a.css';
import '../../css/f/fy9fm1fke.css';
import '../../css/r/rr1k4fbjx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qb4srfb6a"/><path class="fy9fm1fke"/><path class="rr1k4fbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-dial-pad-2"} {...others} />);
}

export default Component;
