import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmiv43pty.css';
import '../../css/z/zpbo7acvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qmiv43pty"/><path class="zpbo7acvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:rocket-sharp"} {...others} />);
}

export default Component;
