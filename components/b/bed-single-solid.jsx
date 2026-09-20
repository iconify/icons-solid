import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc6_jgsyo.css';
import '../../css/t/tc5lk5bgj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xc6_jgsyo"/><path class="tc5lk5bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bed-single-solid"} {...others} />);
}

export default Component;
