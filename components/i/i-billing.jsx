import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkps9h2bk.css';
import '../../css/q/q40219bwz.css';
import '../../css/r/rqyk8bb8l.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hkps9h2bk"/><path class="q40219bwz"/><path class="rqyk8bb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-billing"} {...others} />);
}

export default Component;
