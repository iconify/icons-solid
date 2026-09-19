import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8uhoz76d.css';
import '../../css/q/q7qow0bez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h8uhoz76d"/><path class="q7qow0bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:help-circle-sharp"} {...others} />);
}

export default Component;
