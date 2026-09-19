import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygvvp4myp.css';
import '../../css/a/a__8s7rjg.css';
import '../../css/v/v0ghp0p0b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ygvvp4myp"/><path class="a__8s7rjg"/><path class="v0ghp0p0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:notifications-circle-sharp"} {...others} />);
}

export default Component;
