import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3wuugj7j.css';
import '../../css/q/q3937pswf.css';
import '../../css/e/e-rcbkuot.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j3wuugj7j"/><path class="q3937pswf"/><path class="e-rcbkuot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cable-device"} {...others} />);
}

export default Component;
